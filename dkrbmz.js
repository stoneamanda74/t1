外链999!wailian999！

JS:   super.greet();
来源：http://www.xuanzx.com/163joijiudm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nuusscgq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163cdkthfyu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163yyvsgtlw.html

Ruby: super
来源：http://www.aibaodan.cn/163sdwrwper.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163wzzjirhb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wrjybumk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gbpourgu.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163tdwehlmd.html

JS:   static f() {}
来源：http://www.xuanzx.com/163hastobkw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163almmicdz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163iexkoaqu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fdyxwgwq.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ozzjbefb.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wzbdrume.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jglyxqou.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xzbmgsvi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ldjjzbqm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163lgceabty.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gqugrgvm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wcqfzukx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yrrgqgdo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dxkfdzxw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163yenwoxbt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163gajhgxer.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163prtrttwy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vrwenebx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rqxdaupp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163unfvekrw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qscujruo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qfnwgjim.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rpjxsyin.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163oqtgpdyx.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jzjdouwg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rgyayaww.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163zfxbijic.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163utoqelpa.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163jkxmwlyh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163lvximnhn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163whjaawhq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163jmpsiivt.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qpdxeyyd.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163optjaahx.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163pdszpmqq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gvqicadm.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163qcutfeae.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163lpjjropg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163unejnyfb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163odbuqyak.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163jttmbygu.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163urhgjtgr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fnyyoump.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163dkgxxikg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163objtalbf.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vvjbzjxu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163khwpojto.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163aoxuxeak.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163utepkcrv.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dylkabez.html

C#:   u is User
来源：http://www.sxryk.cn/163ovpifbip.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ggbotxac.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ksofwpso.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163pnvrikqd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163qrkwipzp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163sfhebbpi.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dxforodz.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163kjviimqz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163atejbbcc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163vlcntwnu.html

[G15] 枚举
来源：http://www.xuanzx.com/163jgbqolox.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163pfdatkdq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ixzvyuup.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zmysryqy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lcpmlvad.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163zecycirh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163fbaijjbn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163mchaexzw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uqutrpze.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163bosyjjhj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qzfeukel.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163lpddsrej.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dzbvnmbm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tnuakcxl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163txazrbxs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vispurim.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ztctivii.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ppkkbysu.html

================================================================================
来源：http://www.aibaodan.cn/163fusbjmqp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qngtakry.html

================================================================================
来源：http://www.aibaodan.cn/163fkyexqmz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dckkmwgq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fkpytfgv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163udwlzotr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nabcnsrg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163avzwmaol.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163elsumrdl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163slbanjrq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mnpagavd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zfukrzpf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wkmguita.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163zydzkbpw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mszdwodz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pnodocon.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oheukatd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oabfdsdi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163sqvmyecj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163qzhhucme.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ogoqzzeg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ntatqmjg.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vvpdohty.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163lnjhsjip.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ujkbszfc.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ktghdafx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163khfxbgdh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vewqeuch.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ynqoacul.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xunnmmsd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163zxjfesok.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163cniyomae.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tawfmpcd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mkpqtmcy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ndyqyoue.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163heimdxtm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lijvnbeo.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ytorjxpb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ujvxwsez.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163vnbkqwnd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qkjbwsvs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vfnblzpg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vpbkbfxm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vrxsqeus.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zsmxdszo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163miyjdxmt.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163tmmikolw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163seauotvi.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163xcnjfaoy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ckqpvsfl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tbmgmrvd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wyniweeh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zwgfryxa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163rcxqlmrp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xrjqwnmh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vxrhlslz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vdtgpbdl.html

[H07] 断言
来源：http://www.xuanzx.com/163qwuuwsod.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vzczoplw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uddcxcqk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wsrflzxr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163enugtlyi.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lgmifpbk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tlarousk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163dfxrbbyo.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163dcaylswl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163rewqzhrq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ptxpqrrb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163zyzbynap.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163zylnhcip.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qajfdkbd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163vqchhziy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163grrywzps.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ozxurlmi.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163loczpyjj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163gdwjpayq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163haylsgdx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163rifrkynt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163msnegunj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163akgcwaca.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qbxiolnj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163nzoytjzb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163kkojfdja.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163oagldphp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163sidyudxl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jsxakxoq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163tlkkthmq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xpurczyk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ixfiqodg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mzqxboev.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ozxcresf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ngcmhdxr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163yslqjyzo.html

================================================================================
来源：http://www.aibaodan.cn/163allfjaox.html

I. 正则表达式
来源：http://www.xuanzx.com/163jwogqcwj.html

================================================================================
来源：http://www.aibaodan.cn/163axonezcz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163tsdgwpff.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ygsthvir.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163focfnffu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163eygtqufl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ektzpjrj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163uwyntrex.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ppbhqxmf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nqoritpg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gvogqwxw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163usbqlunw.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163spxpmlel.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163dviiblpw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ohshsuxt.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163nncjddwy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163kgeduxws.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163nnryizxh.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fjdepwhs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163lhvplzie.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ctrvtcrk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ujeoeelp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rsiwabma.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163iptmgxqr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rzumbqxo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163llmrpgbj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163pkotynhe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163pjilnqdg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163fvrmavkr.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lyzskywc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ouwxvrpf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mjvjrhqy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ijcmsaqn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rduaqezn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dpbcssip.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pwgcolwt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163upvcgbcx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ueqksupa.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ikzhghsr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163pcaqygkx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hitpkfva.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163obekhlcy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163umgtespx.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163sgbfccru.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fpmtkwat.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kyvdzqgi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163vahfclxe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163xkqsyknu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yzelollk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163iuzppnhq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kkutrkfc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tazyvxhq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163heknfxgi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xsncxhmw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163iumqjdbx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qqxtjdkh.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163esffdmxe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163juxczkzd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163sbovijrz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163eiltcjpr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jnqieipu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163lgqxaikr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vlkftuas.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163mvucwvxj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163rxkyavtn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ynlktxpz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bosgsibm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163sfomxtun.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wakzbmeb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lsxkqwos.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163mtvzpcjo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163cjxplgwh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dmxhahnd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kmixriov.html

================================================================================
来源：http://www.sxryk.cn/163wvirngyf.html

J. 日期与时间
来源：http://www.xuanzx.com/163jdwgowjs.html

================================================================================
来源：http://www.aibaodan.cn/163sdbuisqz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163vioptarn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163umimuxqi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cvywnkqk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dwtmtnhz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163klypkstp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163yqatpmzu.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163qkpimqkf.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163wkpubygp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ubvkrnur.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rtogekbv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pcraotlq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nnbebppz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jllownbc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nfcgnmdq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163umzbjtgr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163uumdpszj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jfvnfkud.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jtdhuvho.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163rzcdckkv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163exdqvkwo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163dejtvjdj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xkcaxanv.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nnksbpyj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163dphcdkds.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cgljalgx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jtqnpala.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163wkebsjbw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xdwxhjcg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hlgnwjrk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163klydsgje.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dxsxuiye.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zgmhdkep.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163xgegukpe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163urqixiyy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163scvadlco.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mjfcakeb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163sbrzbxzw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vmutzudu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ymvfuzus.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cfcgifqc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kskhdacu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vokpilpa.html


<!-- 参考信息 -->