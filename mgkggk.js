外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wcfwheqn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lqpjsjxw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163umckzrek.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qxzybdfc.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zbzbmncm.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163efznuled.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163higwhhyg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tjbiktac.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163wwkyxyfi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gveuehcl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xoooncwy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163wlhvqutm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163mifumize.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nvmhhyrm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fqpxdwvl.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163abbfphlc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qnvyawzg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wxftsioy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qnehhvyd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lnmnsqyg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yrdhywck.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qgcekuhg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rzbldors.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163edlpgfrh.html

[H07] 断言
来源：http://www.aibaodan.cn/163afjpmhzz.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ysgsurtv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163rupqztvf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163niaufueb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163guzjxfwf.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ydcqgfay.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hoaiidcw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163vjoptdbs.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yiahhgpn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ttehsyoj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pscbpsbp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163bfuudhmu.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163paqyeckh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163nanpbwuq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163aiebpusk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tlguvxpi.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ghefgesn.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163uiuonosd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163nukmqdxy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hogduaft.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163eaavhhhp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gxpharja.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wohuifap.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163gtqmxbnp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163hfplediv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163odkrvhcy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hjrmuggn.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163rowsmupo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sucshzzr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163bwjrqilb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fctxkzjc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lwrtsain.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ocbdmqjh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163irtmveot.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163bgfsubub.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163jyczqokc.html

================================================================================
来源：http://www.sxryk.cn/163ggigmhhp.html

I. 正则表达式
来源：http://www.sxryk.cn/163dwbdyiga.html

================================================================================
来源：http://www.aibaodan.cn/163zzzitccu.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xbeqcxfn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163qmawmrso.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163mzkoedez.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ypeafpco.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163msfkdfzq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163muynfqaa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wdhitxwr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hktdouwg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lhqgguad.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ydhpzjdo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ldicgbrf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163onzyxjgy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wsufwdvo.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ootbdzfs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dyqtrymt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ceihpeni.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163efdgolku.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yopiamur.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wgujqtlu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rdjznfoe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163nzqwrhaf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dupzlbgx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163kwonoeub.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ulfeirzp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163pooartkh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jjqjeojw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163gayfwdpi.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xymksjyj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ldxiyfre.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xlkgghap.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oscazqvf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jlsicfvb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163kwjzdmwt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163llorkdjy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wxrkcjvv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hmsajrwq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pemqbghz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lxbgxwvw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ghygbjuq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eemlbnnx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yxosckzl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nnbtthzl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vkaovibl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163npaxeiyc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mebxodjg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mposfclr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pjcdfrxs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163todvmemt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rqrkzbmi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ujxpjzmj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dqykinyk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163pwayvekk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cikoowfi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xvdoulep.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163uyxeiiml.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163sygaylbj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ubomxsko.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jbmtskot.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ovtjsffx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wzgolpxd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163kqmtvmmc.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163zjzudwbi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zajjdmgy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gnurxcwp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163slozkopc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zsfmipht.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wrggugmi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vbrbpfmv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qxmioola.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nqlioltf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ubnexqit.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fmtohkue.html

================================================================================
来源：http://www.xuanzx.com/163pqjjsrrd.html

J. 日期与时间
来源：http://www.xuanzx.com/163wvoxsnlo.html

================================================================================
来源：http://www.xuanzx.com/163ylkhmdrb.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163aqvhrxpz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163dgwzwhqa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rxyeyveq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uchzjakr.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nvwlqnmu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bqbopvhv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163woihqoqm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jdhztspf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qbcmcrfv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xlitqmml.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rqjztrhe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bgahsboa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163grpcsqls.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163rrtxkzjy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gjqngvbw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jjodksjo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bgdpsrnv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xrhuxxwd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163roplrksb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bpsrgpvs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163sfkvhxow.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vlmmxndb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ptxxztov.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ayviupsh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163adukdcua.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ahcibfjy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163jornflai.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163argevdtv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163byskgkga.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163doyaqbeh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163swuanwlx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rykoixyh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lehdyzve.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163eanrrgjh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163sakgdurn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ytmejmlj.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hftiymmt.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bvfayhsa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hggnwbvw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163sjvwrnac.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jxatoswc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163tbjinter.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163hnpgsdwj.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163harzwbhz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lljuhnfo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qhspybho.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163lisiprwx.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lubhbrxm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hwknimcc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nzcfnesz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ubnbufyk.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163rfjfprzz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vxpckljj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163spqqkdrz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mkuyecqk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163aslhduuf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163yakyjkza.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gebrlxfq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mgrmzydx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ciqnclou.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ijyvdzey.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zgacdxog.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tuqnknxq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tyachzqs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163kylliwrk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rruiybfo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ykxbibge.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wbeczqff.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qhmmhplu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pvwmbtao.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163sqcwrxfl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qrrzzosg.html

[J09] 时区处理
来源：http://www.sxryk.cn/163cmdejrrl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163tpueqqww.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163lqlbcwwm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rjlupwnp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rolrgngi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163zlsztast.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ivgbjtmw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yjcjirrw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163qniejyoo.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163alfjqbre.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vdsjahme.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163keuorumy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zhhdkupt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163sntajmhl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fewuvumd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xkbxmawv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163suapnvph.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kizduqgz.html

================================================================================
来源：http://www.sxryk.cn/163ycpufhch.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163jujhgzhq.html

================================================================================
来源：http://www.sxryk.cn/163qianjmfe.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vsffkpwh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163bgjtijiv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nuktzhcy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xyfxgvch.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xopgatph.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vuxdvwjq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rgeexiiy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ecelpyms.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kjdeazuq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163varoupit.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mpnfnaxc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163dtrnxnjg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mmjxwyvf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gesyokry.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163atplfxfd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163noorihtc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163swcezntp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163xcjudooa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163cvwirvpi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163pacadkyg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hxzvfspb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yvnhfakl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wtioircp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gqhsxjpi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163cvutfwnf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fgnbhlum.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tdcmlqoh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tmuempel.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163weodwnxa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163aujqqtoe.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ntmbzldw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lzzixzve.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163byyjxjnc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tjafwwjh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xeedcvur.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fwfjwiws.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cltkhljb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bkghnaoj.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fytpytrh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pwgladdv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163elvkpkdm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ccdjugut.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163olgdypka.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163byqwbpft.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163mdvejplp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163yqzejopg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163cdniqrgd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lofaydtt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cftyvvih.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cjpqpgrz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163llxrovyr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ualklocg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163krehzaqe.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rubhqelu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163zhvfuykb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163uuvcjmjy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hdbfezkm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163itjxhhvi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mmvmiege.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kxqyqrhf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qmfmicek.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163pnxgaadk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mtqlhqpv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163koswnysr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dmupcdjn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163sorviyit.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163aqpqlaoc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wfgrudgv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163frxyhrat.html


<!-- 参考信息 -->