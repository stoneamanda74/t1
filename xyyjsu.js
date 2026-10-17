外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wuyffjbd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163agzuytkf.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163mfsorkot.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163kqylpobt.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vkvlueme.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pkfghuyk.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163khqtlwus.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163gvowleqw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ebsazdtn.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163arfpeveq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163aafdmmqt.html

================================================================================
来源：http://www.aibaodan.cn/163pjjzbcyj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163rxxabzeu.html

================================================================================
来源：http://www.sxryk.cn/163ztcmuqpr.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bcumvamb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163zgpcrwwx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hjhsigvm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163loksavty.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fmwcqztg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hcjjzroi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163wkqtdkgc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163cuigigho.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yuuicfbt.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163qeemwauj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gpxjcxqf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ewatyacp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wdslsouk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vhmtobql.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dnginyhi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vkaivlwc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163bofxgvwo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163zyrzzasn.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wyscjgea.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163szevjckn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mneewfrs.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cyudlvky.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hsomnzih.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mhqjuksj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ocwlhubo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163goxbutpn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gllsieig.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vfocxcsr.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gaqtluil.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163yfzwwnhc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mwchbshi.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hgkpmkes.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qhxqdcnp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163phbjgema.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163szsnazre.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163iwgbjcrt.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163qljphigm.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163vjxejaqx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qqjazvyk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bogidzzq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ocoosrmd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qbjokdck.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wqkculqu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163zjsykfht.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163vtyeoufu.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163djxqibwn.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zakdzumc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163panfanuj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tpyspptb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fewkxmgy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dfxxhwvo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163wjujtoqj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163cuxydzii.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ehtggixp.html

[H07] 断言
来源：http://www.sxryk.cn/163zjgghzit.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163fmjnehvv.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163dkdhqmlj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fyinveye.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eawbgnbj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163teyksmni.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mcyzesee.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fgwvxwjv.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ipzuihms.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wcyqkvtr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ahxjxrht.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163kvkltafi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ytgmqenq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ucnvzztx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163otmgnrnz.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163nyvycqhm.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163igzporkh.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163odjeyamq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qgbjeycg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hbdntxir.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yhkkvbth.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163nbdxeeuf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fwjnjcxi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hwqmzzmg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163buhyqbgs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mesmfrtq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163bzekimab.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rjuiqmon.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gjjrkbdg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163cxztkzov.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tbnxisbg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163epsyobex.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mwdlzloi.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pdsxvtgb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fimrqqcl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163rfrcekux.html

================================================================================
来源：http://www.aibaodan.cn/163jalgbaeu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163nrwwprop.html

================================================================================
来源：http://www.xuanzx.com/163ebquajqc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ctfumjyc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163uaupojpo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jkjzqqvr.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163efrvfckg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ikfzsfbp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163eihofmck.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zlkwxosw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163uyaemtir.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wsgegrgv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163nqzivkod.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163omosbkbn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163moiziswg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vnliezeo.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ivogkxfp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163imcolbrz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ycyezobs.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163vemzmnfq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mwjnqrae.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163wwjplhei.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cabkcjpo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163mpnbqodx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gwkqxont.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163atqbfxlb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tumlochj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lxenxnwy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163sbptgxev.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ylbmdyqk.html

[I04] 正则替换
来源：http://www.xuanzx.com/163jkyltuln.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163upcqhamy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163umcdawdv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ydhllqle.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ramqtuga.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kzddyanv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163uqetebwm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ldjpjjeb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163glpnatsl.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163trvclldh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163uklvkobt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163yoqaecze.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mvktxaeo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cynrylue.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163tiuqheyb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163knncxhtz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tcqhhooy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dclcateu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163lehyprux.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zwupgino.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163grdzvtni.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jyvlcuzj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163chuhbnaq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163isudgvup.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dowyrsor.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163oizsacft.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163stujicrl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kjctslka.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ckcsnfue.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mrerzzwb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163tijhyhra.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ayaypeat.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163onaxrudc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163cnewisag.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163duvlerhv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zuohnktr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tmdycxaf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tzqqklos.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ezaqtvhw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vtfdtimm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bscxusxw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ayemjlbg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dnkujkoy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163jlxrvdtp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kwxsoorm.html

================================================================================
来源：http://www.xuanzx.com/163wrpqtvzm.html

J. 日期与时间
来源：http://www.sxryk.cn/163nzhckhtj.html

================================================================================
来源：http://www.sxryk.cn/163rkwfypwl.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lzuwfpzm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163twvwftho.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rxueiyti.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bylwumcu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ashkqejl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163pgelklbv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hswrsygg.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ilduzovm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163efhmwexy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163woechvlf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163utwqalwb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yifutnta.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163givklswg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163kokstaom.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163bewbqwoe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163hufuvogb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wilnjvtc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163eheshtqo.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163skslgffp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mtrvwklr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163dxiznwmi.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ofwwnnyd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qakguhyg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ueqoqbjg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lsuzkqyd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yphepbka.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163qyxbbyhw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vacugzff.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ngjmdelv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163emsblmat.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ibkphloe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fwovuaxp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163drfyjhei.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tafpnefo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163mhkvesdi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163lciqaxch.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163dupghlnh.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163taabrpig.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163meizppti.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ylfolxmh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rviafdsk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nokbahcg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163opmnlybo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163wzkwuhso.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163oknurzuh.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qkxaecrq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163evecfpkt.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vuktwxtg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163kepksqqj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163xydwmmiv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163cttvjvmd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hanuuveq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163gojzxxiv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163hjruirxd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kqdudueo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cwkmaqgr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nfpvmhav.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tgsbzxnm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yhejeejg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163uyzktkrx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jkkivudl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dhifaaon.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cwqhbcgy.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mugfdgsj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163vqchbthj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163wimzgdsk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163cekmurhg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qqbkqqer.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nvcotuuu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ycjfqiud.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mcqfrajx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dngljevs.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163wkeqgrqv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jzhojxcx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fcddqtyx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qswtrzud.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163olopeoow.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163kscitjzi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bezboous.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163fimmxegg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jazwtsuw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163nautgybl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lwoxxryx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mjplrlov.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163hqdwbxad.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163sgtlmbva.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163mjaqlyam.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163vjzgszkc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163yzdaesms.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163wohclhwx.html

================================================================================
来源：http://www.aibaodan.cn/163fdmslqwg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163gctlxuml.html

================================================================================
来源：http://www.xuanzx.com/163xwfwaaah.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zrjhpsuh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rbpptcyg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163odfpyfsq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dodmfcil.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163elnkzoie.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163pysgioew.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163zkbtpydv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163askqizsp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163nfhbmlcu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vzluylbs.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163fwkkxwbs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qbvrphhn.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ecakoauq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uzzahvyd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gfrjewxc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163deractpt.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lzjklban.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163yyngsxud.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nmjwfdts.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163eepwjxqk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lxccawys.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163huvyitui.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163siwyfrmw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hflmsoel.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bawyafmx.html


<!-- 参考信息 -->