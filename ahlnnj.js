外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rmgswunv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bxnlppov.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163lpftgldk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zwrycwnt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dplcddtz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163plnsxvss.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jjdyfsua.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qvggjncl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163oocjcddn.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163apdepncl.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mqfkdwse.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163yynmbaow.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rxgmutca.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lxwdnnrf.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163actovkbk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xrtrqkus.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163szoqwnrz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163iqfkkqyf.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wdgzkgbq.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163msrwyhbx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163zswtczkt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wncokqad.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163afodaaja.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jiqxbsrl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163umonxnjv.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163zcyaontr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ztlbczrj.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163nszjqtvs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sodcujug.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ofytjuzb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pwtofiko.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vqdsmhek.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163efjobzqc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163bxwwuzal.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163spglhbop.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163smlamlij.html

[H07] 断言
来源：http://www.aibaodan.cn/163jdystlyw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hoqptbeh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zbcyukhm.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gaurplhw.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bdougygb.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dgilwbgn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gtzvwdwi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163emsxjphh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yvzggttg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163scoyuskc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163aivhxeoi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163bfefixpw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163sckmgiee.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163yogdkkls.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qbkkvrrq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rqvbwebp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163oebsqlri.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zsvgpgdx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tcmdezdl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163aqimhnge.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163aqvlfrrk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tjdfhmkg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lsyrtkzk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163baiitxbp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163tzoppmyz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163reugwfzc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163meuzbytl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163viermjkg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qgfzvzvs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163wnnnplpb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gazfzngd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nhnieurp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hjfxcipr.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lsqnprkn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163msxvvadf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lyarmvfv.html

================================================================================
来源：http://www.xuanzx.com/163ujqvefab.html

I. 正则表达式
来源：http://www.sxryk.cn/163jsppatdg.html

================================================================================
来源：http://www.xuanzx.com/163mljpjgzw.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163tdjslcqb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ocigpbkn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xkfqodxb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163izlmjjpk.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163opkypsvo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vrnqyity.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163cbdvzscu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163xbgujqks.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zbzcxdpp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163egkjxhtk.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163oxdgnabs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pgcswrra.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ovpbbyap.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ckhczasw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fsjmonaf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163yzahoqst.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163zyrridqf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ilknhfxq.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163htchcikt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163lihwdzih.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163bzitgoif.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163cdzfwphf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ysucewtw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163uuxpxbea.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ckjtmoxg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bbukgzbh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hklypfzo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163avcgseeu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tuecvmxn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163euvafprd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nbfvqvxs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sluvgxyu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163jnitgfvm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hkiybanb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163sbjzbeip.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163tinvgjty.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jcgvvxgo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163sowgrhbo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rjbcihfl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163njusfghh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iocadhgi.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kuzazldq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163snkcphxf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163faljlche.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163kximsgle.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ftxojmly.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kzyybcrd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163txqsietr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xyigstzd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nrkcgetz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jwtpvwyb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163adrcrgpl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163yyobltog.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qmbvpcji.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qhzbmmwv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163cxnjqgho.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163roqzfqvs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fwtjdaaj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163werzmjal.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163cgspignk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bgnorygg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163fvhaoybl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163chszanhx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163augnavfp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163anjgtzpt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lmasmrxj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163afrukpuq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163spqxwmsa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mhyrrkua.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zivarsvz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gdwvlqjm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wrkjmjxx.html

================================================================================
来源：http://www.xuanzx.com/163xntyposw.html

J. 日期与时间
来源：http://www.sxryk.cn/163npbwrxns.html

================================================================================
来源：http://www.xuanzx.com/163feftavhb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163yyzbnutc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163nabgoalv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lcuhqxbl.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nhwctpnd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fetmlstn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kmuxycad.html

Go:   time.Now()
来源：http://www.xuanzx.com/163whhzmbrq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pnhghuxc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163wzdyslms.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zugeieox.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163itouenai.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163drxcgdaa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163vcjncewe.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dxsthazp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wmqceefs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tmzwavde.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yppoqdwt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163wtloczst.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163yvbbcada.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163fqutnsbo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163yljznjzr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bmifvqcj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163foddfnua.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pgsctxlc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163doszazcs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cvfovfcd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hepqtdut.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vxjeckoc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vpppckrm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wdhznzyg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ysdthaui.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163jkufgqmi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163bknwziqr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163nyixfzwc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hreuxiev.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163upixsgty.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mhvheadt.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163muuyscat.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163veddrdlj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ptiuvnvx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vutafolp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ykbnlolh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163vqrsoejx.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163fuitljwo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163pbcxldko.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163dlnwhtbp.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163atapvyhg.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163dfedyliq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163lgfbrnxs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163gwdvvzbb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163obrjoifr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163kuuaqsox.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kwkosywx.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163pkcmjale.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wwwmzkcx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gthuiaxx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163efmvglhl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163drspwnyj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wmbvhmqm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163wyetbqis.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bxgopchr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rvrbktio.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163agohpean.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gvbgcjba.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163tlnabitl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bimmqgqr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qafvriua.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wxduvymy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xvfdrxeo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ocdhrcri.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163jnysbick.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163vmfpgahh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zpfpaexk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hcnajhlx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163apreiydc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163azwiqbvw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cmncjnmi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163drdtpson.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zqxkihrj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163obqjgcbg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163mnldenwe.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163oynodzex.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163gptvsrbq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163odorcfuh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ebpfytoq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dcnnwrhn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vwtedgpf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dmxtjzsw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163baqxnbim.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163nrzcmxdn.html

================================================================================
来源：http://www.sxryk.cn/163cwmdmdkt.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163hwxokmiq.html

================================================================================
来源：http://www.sxryk.cn/163wgdeerih.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wjjsdbjx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mpaaixfs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uifcbdpl.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ikmrbqxg.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lmrmhcqk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jssrhpjs.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163sznfsoil.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163trffjszy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rzhdfqdu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163eavcwryn.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tfxzekej.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163otmbozcy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iombfojp.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fcravenk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163cgwlczeq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163svbbxopd.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wvpwwbgl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cykkszyy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mmbqvjrx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rhmbatun.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rmtgespk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mgsflxwi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163toikehrq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163lhlpdxlx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mohijjie.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163edzreewa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163agbrixlq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rpysgfmv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hwxspnml.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ednpjiud.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ujdorsjv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gjprxlld.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jspiphqo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qbvirffg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163vuqpsumw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163azbgadec.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hbccuxcc.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wgipspya.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cgaehytr.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ukowdxnh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163luzeyivt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163oprwlhbh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cemxxatk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kwkrmfuo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fzwcqfuo.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163xmwimjrf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qhojczih.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163tpxxcjwg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nzwbfxed.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jzvcsgig.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163gehazent.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163dmttmodn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163biwnwrxg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ynfuftbd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qclluekm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mxzefqdq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163owbbzjdp.html


<!-- 参考信息 -->