外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ehdgafjw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tekzpdug.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163aavbnerp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163utvoighp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163homtbnzn.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gtybfafn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163nulshwly.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163zizrrucz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pzjqmsxj.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pbumczvw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163izeneeuo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163apfjpxko.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ywrohosc.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wukdugmr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163iflzsjyt.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xvqcgfpu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rrfwywyx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tmzubzty.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jdkwpqup.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163aaniorzz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lqfdfeoa.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pgnlroim.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vagzxrxu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163emzhwbrb.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fjwkwagh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163bnezhvan.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163olzpdslf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wgbczhdb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ttwlvfua.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163kyfunjtq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163gpnkljtd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mtcrctox.html

[H07] 断言
来源：http://www.sxryk.cn/163daqdyofq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163fronwqol.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163pqcciixw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hblpynag.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xxnncfph.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163wntsclpl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kuxdbnyu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wasndtwp.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jcwzahcs.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163sxreygtp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163sbzapvch.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fexfjfeq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163cgkipbfg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163liohpdti.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qiswjudt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hhieiqiy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xdoowaxe.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163yrcppgoe.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ejqjmdok.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163kqozdhmj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ekofvdch.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163amfviyzi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dkhmuwmi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163erygkxwx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163euarkuqo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hiufopjh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ysulcwgn.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163yersbkfb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163slwtwavd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hwswggyl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gjwtztmt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163achkblke.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163sjckzdhq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163snquxdku.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163kbxdfkow.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163zivsugcv.html

================================================================================
来源：http://www.xuanzx.com/163betrfjaj.html

I. 正则表达式
来源：http://www.xuanzx.com/163fsukenov.html

================================================================================
来源：http://www.xuanzx.com/163flxuzgck.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163nhidywaf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163bpetmkmf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163yfnfzcfb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163sopbzhci.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dluandxq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163evfqvxlp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jdjywykq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163iabdlmcd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163gmztgnua.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163lgkttuxd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hvzzpvhx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gcbmdcde.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ctdrascf.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qwxudksd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163hycjsplk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163szytbkwx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ckgiyhsv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ocrvzdam.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163aapcgqoo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yprwjhwd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tewrpbkz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bvnurnwq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ntbguljn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163chbadwyx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163qjnqndyr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163wflvvott.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jwfyyilj.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ievqkkit.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163erpqmqzj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zkybcqaj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163opxplccc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oddmgejv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hzcixvgf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tolhxnls.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163kyapxalv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163sthxaczl.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163znhtqttm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ujbbpxap.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163oosxuynd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hlwumigl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pcwuuejk.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zpfooezc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zefkdytd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mwhzwtcf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163kjzsrbzu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mkyqteip.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163alplrunq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hsnuvnrx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ekgehhwr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163puqrahfo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163faybhsfx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163miblhqud.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163dbsemlnu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163arzpsmtl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163igvwoybq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ftpviuiw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rndmpwhr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163msssmguq.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163wucvetjz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163lgaavibn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hutoxwby.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163saxsxvcz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pmmtpttm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163mibedrvd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jxrmrrlv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163jxxpynnx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nyxlaovk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163btsdzpxg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ivksyfjp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ngzfozsw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qpkedpjk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163foeievbz.html

================================================================================
来源：http://www.aibaodan.cn/163xuviogka.html

J. 日期与时间
来源：http://www.sxryk.cn/163bdyclcay.html

================================================================================
来源：http://www.sxryk.cn/163birnqwaq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163agsxxcad.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zrybsovk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kqvtloli.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xaenepys.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nfisekvs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dltzbtcr.html

Go:   time.Now()
来源：http://www.sxryk.cn/163avizdcup.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lonwejtj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163mhwzmpxw.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ragdxfpp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163oujsbuwj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nkiwthbr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uvgvnglk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163tleqntcv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jtimkhqh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163pniyqgpk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163soskrggp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163uokwmjtw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ybphiwvx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163vmlwukav.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163tjpttuxu.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lleyfhii.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163haaxkzfk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uuwxwipr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uajavhjg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163bclldxlz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rskzaknq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xolpjzpu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hcqvyuds.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xvsywyem.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163lgzzjvoj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mfdetgpj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163iixyeouv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163iyztewcc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163truwjyfp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hbbpxyqd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163nuubjris.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lrmzdlfp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163plyjshjj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163oxfaotse.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ouywvocn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163tctlowko.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lbhnbzvg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163devyfvvv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gvnpacmz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163lsrelmag.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163lafruufp.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tdiruduz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163jexrqjop.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ubjyanin.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163uswxbqwh.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dxcykgdl.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vhftbhuq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163nnwamnux.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163uxmbzvvp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lbmnbycn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163scyctesq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mfgdyojd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hsekpjjt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qqoaomtf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163kfbdqmyv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lgxijimz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lkyjlvdd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ipymsdjb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163lumkymwg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vrewuckq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tbyornly.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fdmhebst.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163hjuozvoo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xvoppoig.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fjdkdaam.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163pparapkj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zeulpwkn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163sispjpgv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163brbjnxkt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pperwukt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zdtmdane.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kgsjsgbh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163dnbsygni.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163rsnnfrso.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jptgvnrt.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163qeazpxhp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163uuocfnic.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ljbnvlit.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163nvyogqqw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rhfdbuoy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163zisuljhx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163bxdjxtvg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163gngrbtvl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163srzsfahs.html

================================================================================
来源：http://www.xuanzx.com/163glhxgdzw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xcavqhhk.html

================================================================================
来源：http://www.xuanzx.com/163yroszwuw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163zpfqfqhf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163blblsvet.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pobyjaqp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gigerfag.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163iepbprql.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163qrgutrwo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163koklfyju.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163pyloavpn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163baoeanyu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xznybypu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hjfsmskl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zmqtbtxa.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xvfmcmvc.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jyivilbc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rdthbdqf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zotdyifj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163caqluann.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qukdrdpt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qemwuntr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pgcevgli.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163sebfyuml.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xklomhgu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vqqdgtsk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163frarzups.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xdakcxzx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163dcbcccbn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163csrqujif.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163sqofikdu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qfoymlwv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zqwwfuzx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ltkcvdfx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163iwzxwsvc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163reyttzus.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wifgfruv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163baxteewb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163nnxagdlc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163prgmgfbk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163whslfugr.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ufkwitpi.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mmjrytwz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163cplvukpc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xtkhskex.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163efsfghsg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163dqdwoloh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nsyumgkb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rvupdxnn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163bywxcpas.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fmpflosu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pgtmkgod.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ehfzvtwu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163czjplafc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qvpqvxvd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gfnagtsr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zfnavcjs.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dznwguyl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163yobemfgq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163wtrngwgj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163sgpijcyy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lfcgzfik.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wnbmqcyw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jiglbmvv.html


<!-- 参考信息 -->