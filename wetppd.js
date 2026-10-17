外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163aymzfdqf.html

[G15] 枚举
来源：http://www.sxryk.cn/163fgjjbsmh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163uonbomuq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ghaytxfb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mdfkdcpa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kmbnabxf.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qdjrfxok.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dhjlqwbz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163tskwurfu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163amqgivfn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tpdtizzj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xvbxsaoj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163htehhxug.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dfmayqeq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qerwkdpi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163cdbwsobe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qvdhfqyn.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cujrjein.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ybvkovpj.html

================================================================================
来源：http://www.aibaodan.cn/163tdthttkx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ictxxgqs.html

================================================================================
来源：http://www.sxryk.cn/163estyprxe.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163cxwcrina.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163mwhmsgrh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163qtsyxwcx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jnrbbtaq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163zihsketx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163jxcryfxl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163uzewaajf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163uzfrdddc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zzkxqkyq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163phfdcham.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163fftjqwot.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bbterrga.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ijttzucv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163flhnumvm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vhejjbks.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163svpuzkze.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163mxhuhuip.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163whhsnopm.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zgqfdtdn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163onajiord.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wprrrzdx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vqdqlggw.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ouxxdokt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ynvvexwn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163cexkvvjf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163iebklhvi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163muxhpblq.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ipmfgvto.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163tmuqlqgz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163eczganxi.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vocwruhl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163raqivuvt.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vvtowocq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nockeejz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163btybhtto.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163azuqkbbs.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rhmdpolo.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163odxzdsra.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163zvzrqxlr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dzlsqgyr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xqnsybrg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jyibphlg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rgsqgeut.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ykewrtnc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hxdrjetb.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163sbtxaqwg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pzqnkmov.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163buvuzlit.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fllhgxux.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163oksqnurh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kcgpvbxv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163oggcwxxh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163zsdeggtz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163femxqock.html

[H07] 断言
来源：http://www.sxryk.cn/163cnznmblr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kygsbsqi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163zbmuwrin.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163falwclno.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163eixncrhh.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fxdgsirq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bdgxxyyi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163krizzgpu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163cssmkgah.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163rmdovnyv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163sskbesnh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jxeauiir.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dngtkibx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163duduzkta.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163rqgkpirm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163peouwvks.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fckfexzf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163hvvzmvfn.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ispzhqev.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cnrfqzhs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163yfoepohr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zygdnpna.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tdbrnfuk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163sbrrdiwq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kfauidmm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xjiyzzkd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gfwjvwmz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163jeevtyub.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163hlsdabhv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pjacqrhu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163faggzquv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163sdqpdijt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163eoaukltd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ujnsldix.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wolwijzi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163qbxvtvuj.html

================================================================================
来源：http://www.aibaodan.cn/163nqzgklnm.html

I. 正则表达式
来源：http://www.xuanzx.com/163urtfnehq.html

================================================================================
来源：http://www.sxryk.cn/163cwfahfjf.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vsnijblb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ajeyegxo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163iultfued.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163obgaowpa.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fmdnqnac.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163lvninfia.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163owlpkkmf.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xolpdznp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163nhoqgbsu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dfhknuii.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cyxlqdyt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jekvmexv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163pcxqucri.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163nepenyzn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gtivtobw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zbmwevar.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zcsoozkn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163grqzexpo.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tmmypvqe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163hmfitrwi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163kakrnswa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ggqcrdba.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163lyavyawo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163aqsskfpv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ktpoqejb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163rloyuvtr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163mqfqpkkt.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bchpzuus.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fvwvzfbr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lyalthju.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qetwuyqc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kpnuznme.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qushugcv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163crilcvut.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163prryfpbr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163efpygyzs.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163etlhijyi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163oaunuldl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163aanegabz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mggikwxl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gsgmnbew.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163pyvberku.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163kjwjvvvw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163svipenfn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ovogxnao.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163nbgpaquz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mlmltodc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163wtyguvhs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qugizore.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rdarmvkj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163tqpbrbad.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163oycxqqpt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gqikgxnh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163abmkntck.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163keztllyo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ljkmqvve.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163foxgntbw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163oqsbzkjz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ozkjtsix.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nolbqolz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163wyaxfesj.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163giiurnhm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mtwwmhni.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tcfpksel.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163abyigast.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163rtjkzbvu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fdntwaqc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iosusqji.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uoptacae.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163mhtxnwyu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rwpsejkx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163qgohgprz.html

================================================================================
来源：http://www.sxryk.cn/163clnvaism.html

J. 日期与时间
来源：http://www.xuanzx.com/163npouqddu.html

================================================================================
来源：http://www.aibaodan.cn/163ybeivsgw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163axjsghky.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fzdfafzz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ajyyuwbk.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kuebzbkl.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163shgmrdew.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163kyxypllp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163kjsgakyc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tujxelhv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yfjsslbn.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ygiczkrh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hqvmewjt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lhqcdvhs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zzcxwrls.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163uthsqgsn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qyuxgvwe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nbkaajmd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jjpamxkl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kvvnymwu.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wosqufer.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163wexhvujr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163epobugky.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163elipmlwi.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cvxbtlug.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163xfhuxubn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dwscibmp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163eqgydhwi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163qkpcanfu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vnwjjmrq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vobxuyrl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dvavlsrz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163qfbzmgcs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163viukzrwg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163dqngnicn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qdcmsqkg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kuutonvi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ejmvpbej.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hgpajhtw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nmusprnv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163csjvgixh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jcqyyjhi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xewteiyc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vqitatba.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163oqjwhdqp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yzwybttg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ljgwcqzo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kvrwjyai.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cfaotpdj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mtyabuzp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vpcafvwd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ohkfbrxt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163iysmornq.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163zoveqogs.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163riyzodyl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163eeaasvor.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ozvinsbx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fukaypsb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ucglpabp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lpqcfblb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aljjyewq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jbhmvdax.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ayqprkut.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bccoenaj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jjketpzj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163iidhkqfx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hhiinhii.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ofqvolnt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dbfdbtar.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163yvominrh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163czcrjzrr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163oqqakcgr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163viivmnse.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uqhjqdjb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vwmajehy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163celucyfx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163yomfceza.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tliqjyxk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rcwghkwd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163klubtdwt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gmaysxev.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163arwkjjug.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163dczlhpga.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dumblsan.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163uwpiraax.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163igyokfkc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163askwuzxc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163wnoiwhrn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ofgmqtze.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jpxeezwy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163exgzkgxh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wzqrsplb.html

================================================================================
来源：http://www.xuanzx.com/163mpfesgga.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163smvaqozj.html

================================================================================
来源：http://www.sxryk.cn/163nxctsnvi.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163okqqygbr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mdtttvmk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ozsphmap.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dltzwnls.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tprazgln.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wropxdvd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163twcieohn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dcyxkxjc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163xcbkvuqv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jyzxzgri.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bfbjxbvm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lniqhtvw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lnuiwysh.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wlswswdd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hrknhyoz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jxuuyjnn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ldvytbcd.html


<!-- 参考信息 -->