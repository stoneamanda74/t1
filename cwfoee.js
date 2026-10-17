外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jkgkqurw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tzrhuhvc.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jsszpynn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163rhmshyem.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163iwnadxlr.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ukippepr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nmpstbnk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163dyrnhxlr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ehioguag.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xifzjuaf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163feqjjpub.html

================================================================================
来源：http://www.xuanzx.com/163paaddssu.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163vmsixfrr.html

================================================================================
来源：http://www.sxryk.cn/163rgdlvvaa.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163htthziio.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163pmbbqvjm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163xoxthidj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163stbkbauf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lglzgdkj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163pirqfxdy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vdcbnuuh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163yoppovlp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163qqdshoij.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xdqiictl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163pnukiaxk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163moxneext.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rzkgxjoc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jewveghx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zqxgonyv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163poojwund.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zrdnbbfo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ekvedqen.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vdgvxopv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163aqlfapaq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wmbtnjxc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163aizgqcrz.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gknnnrlp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163kwdaxvmy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wzawqmph.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163tpqjlplf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163hsiqbmlw.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163mxmztllx.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jxambmwk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ocevwqfd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gowqukki.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163iuhzxyrt.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hlihlani.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ypzhqoqp.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163eyjtgxlj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cmldmfek.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163rjpeivcz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tjwxntiz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xwtzmjfj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cyuhrhqm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yblyyvoa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bhsaczum.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163udhrxwoq.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163drqmgtcu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163zlotxfqo.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rujrjlcs.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dzsroqwo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163evtglnqy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pforvqhf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163upqxpkag.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163efxiysih.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163isxjmshq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163cydhfxzn.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mlqkduyu.html

[H07] 断言
来源：http://www.xuanzx.com/163vpbwmyar.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qldnklho.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163svvaimrv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163offnboiq.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163snuvmrdz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163puxonqfi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163aeiiwhmq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163tlvnynhp.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mrwgauhm.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163fkvvrroa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163qnlhwmbw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zjgrxmkn.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163adiviuxc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mgvnnzlr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mlhtbmeb.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163nmvzycie.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nnzwldeg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163klixojvq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ufjuvrta.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163monjfrlx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zjbnmohr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jdvyzcrx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dtcsfuny.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bwqwirth.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163urxfcrvr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hkfcafbl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qhrdctud.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vqkgmnft.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jmcioirj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163sqkyydbs.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163sjtujbvz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hdtfrwoi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163bdxxlkaw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163tzwxjben.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163msdorelx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163qjxrtfnh.html

================================================================================
来源：http://www.xuanzx.com/163zucybvfj.html

I. 正则表达式
来源：http://www.xuanzx.com/163qevhebaw.html

================================================================================
来源：http://www.xuanzx.com/163zdxflyoc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ntrnwxye.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hownfgxa.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163uggyredy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wdjeultl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wpvholku.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163sqpzwssh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163sjxzravc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163plgkawij.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163uadyvwxv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lkyampwp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xflllkxg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163znikirre.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kboosoma.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zyuqyjgq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163brsxehcr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163unoepddh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ajyuxjdq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pywwckgx.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mytrqpsi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mgzougla.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vnvxonud.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163talnwabv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163kuitxiya.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163fpicdflu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163xkpfaqfn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163hjmozeal.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163scbfzvzh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163yprwudcs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163uabvkdzt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pcmpdwyv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bylxjjfo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tymvjtac.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163fpzgdzst.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163uxdjmeyp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163oibreowb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qqkaucns.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xgsvsrnn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163vxlkkvwv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163egmgqazc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oosazzaj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163skxaesvs.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vvedogrq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ihzoqlmh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ktlsqzyl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dhmuwojp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163jvemaogn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qajplnlz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163mwwdubyh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wahtzdbz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fgheedqu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vyrysvpj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kqnjktpg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163lqbhfrnq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ybayeeko.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163njvmkkds.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163uekmciju.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163knfaxojr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163qactuezk.html

TS:   /error/gim
来源：http://www.xuanzx.com/163zswvwdyp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wdhbowup.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163zwrwgqke.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163akwqbcav.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163svzkhghn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nrkrjape.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163rwdehzcw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163yrqnarvk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163itmlqrlo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163idvblysa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gapvrrgo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163eaybbipn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zynpjuim.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163agjfgjpq.html

================================================================================
来源：http://www.sxryk.cn/163ffnmrrnr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hgqowtvk.html

================================================================================
来源：http://www.aibaodan.cn/163pluhcqad.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nvyeflfv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163mowjkwio.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ygqwaihg.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yvnivrqi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zgdethwt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kasuxlcz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mqqyzwxq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163whdcufsq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mhutumnn.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xpgrwled.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vdiiduru.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vmcxmqqj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ymirlkfn.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nuermdfl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gvzqcgex.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163hwhzuqfi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wnyrdbhy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vmoptmmz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163idwahukf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163eybvzqip.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rjxykbdn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ffhdgfni.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oogmzeuh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163avbisaji.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zpleuzwo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xiopaqcj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163dbjdcvfp.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ljnjtvku.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163qlonfesy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ruewerwt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163wlbdhztb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163kfwqegiy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163enawrkel.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bfjkygqz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jhlqxsjg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163faisopsu.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jtupdocw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163mclvdpbe.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ptufmzuc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yelsgfqg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zkpmdkux.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zzoeujuy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163huubjiem.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qtvskvyf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163yukahyqt.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163aodpcmdx.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163teigpnea.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ckjjoxfs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163syylprlh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163faeezlsj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bkdizmgx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jeblcofv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163offdaqlr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163apisxzky.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163fsxbpieu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rdebkegy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163iienwgag.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sapixuml.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xkoanbgk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jtoxkldt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163qftzcyjp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wegbobgb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kheonwdc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fkctnukc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rrrqhgxx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lpmxjjwv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163czxddmgu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xlxoxdbm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163iojfkycm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ouaiunmj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163snauyxqj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bbaidxwj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jtmxrpyu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ybncnwba.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163mvprxmbo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ixsdsavx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uvcbcxbz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jrlhlfzs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163woqhjijz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163anzxkwie.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dvbizdig.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nrohpdgu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163udtrsulw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163dlbbffyv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163agpkusko.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163eufyjvdn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163aarzgywy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zvbocryj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pktyaibm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163seqlaqpo.html

================================================================================
来源：http://www.aibaodan.cn/163xspwbpne.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163fepyouoh.html

================================================================================
来源：http://www.xuanzx.com/163lbnihcip.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163oowglfge.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163avhstivi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jjtbputl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163azhwacla.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qfkuowfw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kumytlvo.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qahpethk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163cnwysbje.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163jmafttoy.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163mlhyxcpb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163drlgfnmj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163acrozqkp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jgvgwthn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163odegivnl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163sxkljona.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vgxzceuw.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ffwltxsh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163otjxpexw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163huymzecu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163saocunjm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163biwcglny.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qmlxhytv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jvbofnns.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kfhphiax.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jvzkzzbm.html


<!-- 参考信息 -->