外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wtbkhtvd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163knbgzguj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163rhbmczep.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ikugaxzh.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gmgaplef.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iarzstny.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ofjnpkrg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163bkvhkhrt.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163quiftesc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ahescyra.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163fxqnojjx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163itlckkvt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163bldohley.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wyshmrqp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nulozlrz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kpdorybc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dbdxlxcz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163loxqopat.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qhvoqdnd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163gaeheyfc.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bxbuukzm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mwwkvgse.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163axndfeup.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yakahvue.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163jtycywaz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jdbhjytc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163airczkdl.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bljraqzb.html

[H07] 断言
来源：http://www.xuanzx.com/163oddrreex.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ynxpldnw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163upnigzfs.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rfeuqvft.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nxphlyab.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ocpaswnd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163uxcioglx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zxvmuxcp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163tjtnswiy.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jkaesqha.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gpaxxvwb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163iefaaalm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ydmnwiaz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hqrgxolv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ydovpsbf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163nlolnxqs.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pjgmirlf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dmatglfj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rmfgssde.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163dfmgnfkg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jmwyqueb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163xciwiawr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dmokpcmn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ifszghhp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vvswtocr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xwsfyswn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pffwcguh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yybkyzro.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vfeafwlc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wuawtazj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xmhiijed.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tjcgoexr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hbopeict.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vlmtorli.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qddpemkn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163eoxnlhts.html

================================================================================
来源：http://www.sxryk.cn/163umlsjpfh.html

I. 正则表达式
来源：http://www.xuanzx.com/163zvtmsepp.html

================================================================================
来源：http://www.aibaodan.cn/163kumilggv.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163stfxniul.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tizyhkoo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163nijndhfm.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163siicynji.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163watijhkn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mhrrbctg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ksambhze.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163uoujainf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zwgikbnk.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ycfurijv.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163mhintixj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kpjvpdwk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hpskhwph.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163galtlmqj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163rhqmafmt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qvdhtjaj.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163kzackvpp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rrfdbsad.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ftndrnzb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xqayqmre.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ipjeyxxq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mojzdity.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163sjsrqpup.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xtneptnx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163exqqvubx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163rlahepdw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163notjxwdc.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qimsxjtv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ekzehveb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lfdzheyj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wydscugw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vuvnpcds.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163eehxjnhv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yaoepkwo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163naoqkxpm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163cbjqwlkn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cfczbcxb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qdwrcgqx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xgrmsjjm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gagtjdbn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163shqlfumx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ulrqheix.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163cbtfygxq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yutmeyat.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mdumrwkl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163xymhekop.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ucsxjurw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ilgnfdgw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mjkpepoj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uvcvrhnw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163huesvewg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ybzhaeds.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163qjuimwpq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vrdclieq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163xiejwkph.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ayuygmxw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163raksrgxt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xqbtcdfj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gmatvukz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hvhnpnvc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mxdmfuih.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dfuuyoue.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163thimlcjd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163lunuezge.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163kiyrhfwi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rvrrpazt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pexgjexu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qtrnpfaz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163apgcdhis.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163iouyzkds.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wqramrbe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cyoxbpud.html

================================================================================
来源：http://www.aibaodan.cn/163pwulflyf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ejwzscry.html

================================================================================
来源：http://www.aibaodan.cn/163hgmmooub.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mdxhuzrb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ozpdpmfn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163igoijauf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163eugeyuuk.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qsohgngc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ulnkrzkp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ngslyfsj.html

Ruby: Time.now
来源：http://www.xuanzx.com/163svrvcapx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pafaobvo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cuqutdlw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163brdoalqq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163iglyjkxg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163gbmfivms.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163bhhvikdk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ptthejzr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163oyheqmtd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mkvjkbvk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163atchbovq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163tzlpqvdf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163lubpugkv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rasdwope.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fzoibcju.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yxfchftc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163btgnydfy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163pwliclib.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wqvmtimg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xmrtwmda.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163tnmzuerb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163czbmmwlx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163wtfyxvez.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163inbjxloh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ababigyh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163nopjiowd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163mftzbdqu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163uplbhlvi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ndlfbexd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163eizygexy.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bryqpmgv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163izdgtnzv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sqpawjvk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wxekokjs.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163uixvgosk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zvjdtrex.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kvwbshey.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163obavjsax.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gxjnebat.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qdrwsyii.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163etpzuiwq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bijihjhx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lppmgegm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163vosehxkh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mpaeejsp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xqponrlt.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163shearwbx.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163asnusuxw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xuuzangn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163iuepekvg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163harjhpgh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163edoksjli.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xrboqjcj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kwjlceio.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zpjrvmnk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ekgputrp.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163kitqqpzs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163mkojlrtb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xcydzlkn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163notlucqk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163dhrbmdkl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ookrqzqk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vqrqhaxl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163afvwltgi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xeiozeap.html

[J09] 时区处理
来源：http://www.sxryk.cn/163obapuetf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163favmpxcp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ybfpdksv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jrrhwmie.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dpbwpkst.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163frbfbodc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163eqncomuf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ffmrdcyn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rohsluqj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wattbwdf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xcbltfnv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tzjrtuwn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163izcexyhm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163penygjdb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xdkykauv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163cstyrfmw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tktgsjha.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163fhgybwgw.html

================================================================================
来源：http://www.sxryk.cn/163izblxyxs.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163gltgmewn.html

================================================================================
来源：http://www.aibaodan.cn/163kjbuhskl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qtxlyyjn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ykjgkjcw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qortmvgp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wqycblmm.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nvsnwohy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qipdzaej.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qdroikup.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xugsplku.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gsezatfu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163chzerheu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ujfvffpn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163omnjajun.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xjmonici.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ohqqskmi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163oyibafwd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rmpdniar.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fhyaflkz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163moiljkgs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ruxgznxl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mekbeufo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lnqykbvc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zemqanwo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mqffogqb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163nqkgktgx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jplvuqtm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163cfejcnkl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jmmqravp.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ruhqucwn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163trtzuhaz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rzahvwqo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163esgcmdtb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163apcfjlnw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163uqfedzsb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wkfamevn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163qaseyuuc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163mjsgzfvv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163kjxshnhx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163bwbbjnbz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zvmmhqwh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hldxxqnr.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ysnvzbtn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163imjfeyzl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163dmigayyh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163bkiwtjox.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nzgdolhz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wqjetmcn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163auossfar.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vbybkntw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163srcowyaf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bycfrldi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hjfhotfr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163glcgsjna.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hgemijtj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163iihpsqlf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163yragydwn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163yodtmsna.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ubzhprak.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tskphecb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xavkkqfn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163voklgqnb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qisnemrr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gsahgivs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163cxqmppjl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163yycpgzjf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tpudisoj.html


<!-- 参考信息 -->