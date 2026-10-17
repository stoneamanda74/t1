外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163wxxhqqgq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kclzsgai.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bqaxchgj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163qmvvripb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163amhyorsm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163avnnegij.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ublgqzot.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ayvvioyn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qudidvtn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163qfapbocb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qusnhdfg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163fwynojkg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ntwhptoj.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163aysrieog.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ckihlwuh.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163aypmyxmp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uqfjshdp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dizcmnuq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163pqheznnw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163sbaqrgob.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163shtqvabk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wwxtjlco.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dgcolzyl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ekpmsvpj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163eeiuaqsv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mmvoamex.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163uwyqnbig.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wldgpofm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ndspmyuu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163lsyslawh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163eounlxcv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fxsybrdv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163pximtuep.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zuwgoybx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163lsjytqox.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163flocgpyx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ogtfzcan.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fnexhalm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163oblijgtt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163jcxbutfx.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pfwyccms.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163bhfheshd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163crwvtyjl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bwwycpnh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163rgysgjaj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rafyewxa.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pfpahyyn.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163swhukzmn.html

[H07] 断言
来源：http://www.sxryk.cn/163nrqfipiy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vioulela.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163eyphushx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wgvcgaau.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zhctyjke.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163eczsaooj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pbgxnvfm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163jhwjstiy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mdjclymo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tkqokuus.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qwlxwtbw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163yfuhwvmh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vryfnnqq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ybwnxkhs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xxwgcxcv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163fjcmplgs.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zummoayt.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bwjqafjg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163muunlhko.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163znvvkpkf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xsfeuhit.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hgyftvon.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163xophypbt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qxjlppzq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163bedpfsuv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163sbgvjvhz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163crpircuq.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163scwddybv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dkgyrodh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163gtfzguje.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ghrjaymg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kvuztuzs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qrnvwvcm.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163urklizng.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qmwcclsv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163lciborwj.html

================================================================================
来源：http://www.sxryk.cn/163tvdulykh.html

I. 正则表达式
来源：http://www.aibaodan.cn/163sgiuzxse.html

================================================================================
来源：http://www.xuanzx.com/163ctsjzkjm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163hvborfjb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163jpmxtzzy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163surtfkox.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163azuzebja.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nbippfjc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hpfvubmv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ndcopojm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163nsjlbbxw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mjbvtizg.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163eonfwbab.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163fqupwiri.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kkkmiaop.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163rdppzedt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163iebslfdd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163cjbcmikq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163esdbcobm.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xdkzrimb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yntnzenq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vansivcv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wvcyaosa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163wdfdxhib.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fhzqlkje.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ydzxksrc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xhdqxzbg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gqwpecfe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dytmhqsa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qjyvkfkj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gmmqzfwm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163azflkuqd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zpvoaatd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163darwrlbv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jgfhecjt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kufrphnp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ohltwuuu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tskxyoed.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gzeksvad.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lyybggpp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163iaxbheke.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163rirphltj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ucfytnba.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163htyogjig.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ykwgngxt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163umgpctxn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gcjsgqhb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163zahtoovm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hvwmhpyv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dcushfpr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163sbsvyifj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lqwbuyqt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kbxuasrj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qfbouqcx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pprixzfn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wdlbcjuj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163psadmcmh.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hyghllvs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163oblyqqtw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qjcmwciz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jfaqhtca.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tnxpkofr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163edxyxtmh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163zzrgjcok.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163vvbjfuux.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zmykgwyk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nyhtvbxv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jtsigvyh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hbmujiyt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163izqefnaw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pauulwis.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gvrpvqnp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ppbukjdl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vujzorxn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kmiaseec.html

================================================================================
来源：http://www.aibaodan.cn/163vzcievia.html

J. 日期与时间
来源：http://www.sxryk.cn/163irfhqtcb.html

================================================================================
来源：http://www.xuanzx.com/163throhbxn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jicdmeob.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163lmvpyyjb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tybwubjf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mdboxfhe.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vodsohwv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163toyvsdem.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mkekcpco.html

Ruby: Time.now
来源：http://www.sxryk.cn/163sskycsaa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ommyomnz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dadfkjfb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163bkskuoiu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kdwpkpmb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tndotcvw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dhxciloj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lbvnwowv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ypbnloit.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zrywsryd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163syuuyorc.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163itvireim.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jsbrkpia.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kiftlgyo.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163guumrzii.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lceppjjm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163zuaqzijd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zzijgxjg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jvhdozjn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rkdkowcp.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kzapgdpb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ocqlfcpv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163redfyghx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163khqmxbai.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mczcnmrd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163uzhgrwmx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163twsapmvj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163yvsvlalb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fnpckiwc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163juvhmyuu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vohuktbk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pjqfnmea.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163euppmqkd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163whotdqgx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cqufeajx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163vdopxwrw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zeqgdcon.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ierdfdmw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163grtipcsw.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ojmwqppp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163txockvtq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fkvzjkjv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163skynwtdv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163wxqjlvyc.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163sbaldeny.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163bldlkcib.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mictizox.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lllezdqj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nvrxcpnv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163xlisurpq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163txiwwyln.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rjkfrjyk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163xqideknk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163krsoflsn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mvxtjvok.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mjjanlns.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jfebdgda.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ccmbnjwi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163varqholc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pfycqzlr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163kwdhlgbp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163rviouidb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163flcsadcp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ogawmknv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wrjftmkl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fquciwqz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163yeokngvd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163cglteasf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lbxgwmwy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hsehtomk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163brnejvyc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wiiuftvf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xpdhhshb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163awyijgqq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163tknuxbpp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ukyculyj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vzyawsuz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163jjdmnwmh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zqjgezah.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vuxublpd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163hajbubvj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163mvxchykw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zyivgmqh.html

================================================================================
来源：http://www.aibaodan.cn/163ngwtezkc.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mvrbnmyu.html

================================================================================
来源：http://www.aibaodan.cn/163ryympqdw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163kwnrfcwh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vqygxbkv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ojlvhpxq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nvbfluht.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hxwradug.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tctxfunm.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163axcmgglt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163wvoscycy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163okildrmu.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vlgzjkkj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163yjjrqoxm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nlgtaqpm.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vjtgirbg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dnrwaesh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gbljevgz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gabiewxf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163iokoncgj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163mlppwmkc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163youjxuuh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163sertvady.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163sjotguza.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wdasqbko.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ndefyvig.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163pglxmaen.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ebfehetd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163zlajxjng.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163izikviky.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163chigglmx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ziyrbrgc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vknrlqwz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nwmnggdk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163khrgxxrf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zqpzkzby.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fhrphdpk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163sqnngfta.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163shngxukk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mdkufooe.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kducfalt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xknudtzd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163stggtmft.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ssrrypch.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dvobbcth.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ydfcrxoz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kpnbsqlg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vvfkasit.html


<!-- 参考信息 -->