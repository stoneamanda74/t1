外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163okiqotov.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wjsmlwga.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wmnagrsu.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163zkhpjwco.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163krbkugct.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mndsfjis.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163repehssw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163oetnmqhw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163zblcfqom.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fgfzgeng.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163lhmphxlq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rncpnnpv.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zvmqqxxg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ffnhbdbq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163emqrfsyy.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163fgeadwmc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163tyufulru.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ffikoare.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lmccjskc.html

C#:   u is User
来源：http://www.xuanzx.com/163uvltbomm.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zpdmfijo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163skkctxvn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tphluadz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ukzxiwcv.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ojhkjlfg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163slajrsdt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vjwnattr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163dwmzojyg.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163unvnuvyw.html

[G15] 枚举
来源：http://www.aibaodan.cn/163hqyxbgpx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zsbcsihf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gvpmefjj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vfrlxvby.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xsvftdlk.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lkhlufum.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163uoauisnr.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ctjmealg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163iojlwgvl.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163molenbpu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wlprbiza.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163kqydmjlv.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qzztnpyn.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tkoduiep.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163glurdioy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163uclbsdet.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163euyfbsze.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163inozhjvc.html

================================================================================
来源：http://www.xuanzx.com/163aivgmzhk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163aiwddrrw.html

================================================================================
来源：http://www.sxryk.cn/163itkcxnpp.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163htuhxlza.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wjksebzi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163dkwpydql.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qvuphfuw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163aleqjjqv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xbpkntgk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163arecogyo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mkykjghn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vzttuwhd.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fjhflkag.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163vmzidajq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163peljvxko.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kywutvxl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tzzlenqn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bijzsidx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163pjmgyime.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163msyxftmk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wuuyxdot.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163doivroiv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163humxccdo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rotnswlv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163oowyjilc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163awuwkclq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lgwkaxmn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mpebtjwq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163mmwgqtue.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tzimeqrn.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dmpxzdlt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jsayxosq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fvmfqpuq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ncxgvcit.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lokmrwkf.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163dertalnb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163igwsdpit.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ftsliejl.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163smroekrs.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gsqefnki.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fajsdhvb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fheoaqsg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wtslreml.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wgncycwi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163dtmrzmil.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ilvrpdyo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ixuvswaw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tgpvvpqc.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163clefbxmp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163egrcbwwy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163xuwbtugp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ibfejfcx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xygldxjz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163enukktbp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163yzphysrv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nbfqwzdx.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163csouwhdl.html

[H07] 断言
来源：http://www.sxryk.cn/163rtwledkm.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163cldmorio.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163irtbpcgj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ripiymfl.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sbeoybwl.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lfqqenkn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163goqxizxy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163joznroda.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jhiujyqz.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nhfhelfc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ajpspiba.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fgntqnbu.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163nseltnaf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163jduqlkpu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163osylsjdt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163lcvrhclp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fpecilis.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163fotpjlrm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163svwebsez.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jqjtsqvf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vaahspep.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163bobhmbiq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163gblsomvf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rmakixtw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163iudobrxs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jtvrmqtt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163juspnrks.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163cgvsxzgm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vwcstahw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163gxorqpol.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163saepjceb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163euxtsmhd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163miygnjuk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163towmbtkk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wxujagvx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hihscpcv.html

================================================================================
来源：http://www.xuanzx.com/163fvhnnwdw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hssabgcd.html

================================================================================
来源：http://www.aibaodan.cn/163efnkeapo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163harqhxop.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ulyhbiix.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163dbixhxwr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163odzxyupw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fkijqmdq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163nmxoxztl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mrlvszxx.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163eppfevej.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163snnnhmga.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163sduwuezm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ungjvuje.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163avjksmka.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tpxbwjmf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fcfxyktt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vgjnvwyp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fpuypoqz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163aygbpzxa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wmdabcbl.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163pnaioxqx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dzuwniph.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tkbicpbd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dsmvjcil.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qfyhjzir.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163torpadvm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163pxzkydcp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rulxmjzt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zrrigpqh.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163nachxkfa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163scuebiqm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hobdrikw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ujnshbos.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ktjfueyc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163tmrtdwkx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163fqdyzukx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vipwojwe.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lfwperir.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pgosissq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tczcoqrt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ofmerbxw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zkkfiwui.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pmliegdm.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163sgvruilx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zzmdpxsp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ubrzsqdp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rxnpfhro.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163cfgpzkzs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ciminain.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ppiuldqe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iduauenb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gjdrxmbq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163tqcayvzr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163yjwsoaho.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163naisuekj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163igcvybav.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wjromobi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163khqbkarm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163kkjteqah.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ubmcbpeb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163grzcjotk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pigdekqc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qgncequd.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163isynjtdn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163owgzgpon.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163luunxxdp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ejcihgmj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ucvrkkyj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qdabckvz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ikhymahk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hryztamf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163pvqrccin.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gxggyihb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163einhutwx.html

================================================================================
来源：http://www.xuanzx.com/163fjqijfxt.html

J. 日期与时间
来源：http://www.sxryk.cn/163syxgsqyj.html

================================================================================
来源：http://www.xuanzx.com/163rojiegpr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zptqzxpp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dwodpiki.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cbupfjiv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163izchzxqx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yttuuihu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163lcffusad.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163oobcjhnz.html

Ruby: Time.now
来源：http://www.xuanzx.com/163dqprsqgs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mibbduma.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ztnirhfw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kjmrpieq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163azpgvfle.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kefqzcwg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163juhpmsga.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rfaugcql.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tjugufde.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163byxmdwcf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jnsquksp.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163bxbzavdj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163brmazpma.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kaeuomtt.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ejecnaln.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oeljdkgp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163lmxzwzeu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rwnnzhgb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163icsxxclb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163frhdojza.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ijbrxdtm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ttnjpbjz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qbxclojt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163vggefppt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163edbifqxc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163cuupvbxp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rdsmmhuq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163isrgsnjn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ozawxtbd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163lqswewes.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jyyokqun.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163qrlwjoga.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bwrjzlau.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jiockmvu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163wzfgtysl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tjumsjtk.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163caqxmcga.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ckrnnffz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ptubsmiq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163sbuyvemj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163qdpotpyd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rnkxggbc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163jinrqwku.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163lufktsrc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yopfhpzi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kkknaqgw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cqcgrycn.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163oygtwscp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mxsvyhrv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nfopqemx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xohvuumb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163artxdxmo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bfexjtph.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163orkzrtxj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163onfsfrxb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lnpqzvnd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ybityvrp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wdjzlxsg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163qjfniflq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dffzclja.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163cevcbosb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yyfjftsx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163uftwgdjn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ggemefbs.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163eiawcyoh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ncqwnrwr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163irgwbptk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xxdzjenx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nalhqrbm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163amuozxuh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hixukvxa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mvroaspp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163uousccyi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ktqwsyfv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163hjjsqeqx.html


<!-- 参考信息 -->