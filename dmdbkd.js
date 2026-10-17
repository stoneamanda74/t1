外链999!wailian999！

[G06] 重写方法
来源：http://www.sxryk.cn/163yphtbglg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163buqslwok.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ffilawno.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163fmzkarsp.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fzgqlsye.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uvoweqbu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163lckovigi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ssgayyqz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163satewide.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163yhxchhkk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163nmxlfkjq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jybjdpuc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163qswentpd.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ejdcrjhv.html

Java: super.greet();
来源：http://www.xuanzx.com/163lxabaqtp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163cchpywag.html

Ruby: super
来源：http://www.sxryk.cn/163vkiwgova.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163rkjsdpox.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ypfvylxj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163hhviwgbk.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hauvqdra.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ierophyx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163vxzrchbi.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cxwoqfhz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163gxmsvqif.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ysivjlcb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163zjyypstw.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163liwvbjgh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163iusrntnd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gikhelhm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cwdldpih.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163oynvpnop.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ocachqrh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163crxswbrd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tjrrthxz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163opxfjchi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dfagzmlr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xqdphbax.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163yddzqkoh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163mpwrchsj.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wszuwogt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vfhzjjoh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163odpkihgg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163fwvfvjht.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wivkeoyp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jcdxzohj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163bqehwclg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nvoorcit.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163vqwjntor.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163uateopxe.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163horqtkch.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163prqdhcyz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ppjvhrhr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mbdircxp.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tthjyday.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163kibnvjra.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163umrctfsv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163rtzmznjj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163sroxxstx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ejlzawma.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163atlzhuuq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163sevggvos.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vjigstvz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163eotutzka.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cgytnpod.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fosjomfq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xtulqvwu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163pvamjlpd.html

Java: u instanceof User
来源：http://www.xuanzx.com/163smzzzpyo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163yimfliwb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rlvenzqt.html

C#:   u is User
来源：http://www.sxryk.cn/163spsyrjnn.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ymksomvx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163pvajstaz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163asyzszdr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fwvzzyjo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ziifegzt.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163oxfhbhtz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163hqzpflfg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163rweekwib.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163abzhhdsb.html

[G15] 枚举
来源：http://www.sxryk.cn/163yragpusk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163lnhjbhcf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tsluqiac.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163agvufrqo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yescaprq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163tekdazud.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gpuqgtph.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qlyycjvl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pilicpmm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163juzrkqxl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ekewhzmr.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163iactunly.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vqexptkp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163urhxetvd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ykamqnhs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yguaudff.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rhceappm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nutnjkvd.html

================================================================================
来源：http://www.sxryk.cn/163eafgosmy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tvpghjqa.html

================================================================================
来源：http://www.sxryk.cn/163bbaedqmk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hebrrmoe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163orimuued.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mivobvmv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163enkdrwdv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163onsuyiuf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nufczhck.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163uhkffxaf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mowvjfsa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rkqlhbsc.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ohvtkngr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rqluczel.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dhejtnjs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163spdarvfi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pbqkuhjp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uzudmuoq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163eftkimtk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jxudyqpi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163mlgvujdc.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ojetinjj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zxkcrjma.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lhovbhgf.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ckqwjpyx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lbufrmby.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163yvahitia.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163prfkowej.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163wcjbeeeu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nthdrfky.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mmuxvnpy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ykflrynz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ajuqqacd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jizzxztk.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lgqikqys.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163kizazxus.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163dkjhyakp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sfctktzb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163sxyqxtug.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ngurqxse.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163bsjcbwrk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kdwotmxe.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163upkyfbnb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jzydyssv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163utqevmfo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163msiaeahx.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163yzakabnb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163upyzrgky.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rqnnnzwu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163demhesgf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163avuszdgs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rgtxcawt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wwmyrtij.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163wtspluvm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jprlglpb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ojiuhsek.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163tslwyyty.html

[H07] 断言
来源：http://www.sxryk.cn/163ucdfgfjy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163egovplgt.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hxkrfljq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163srtuioym.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163phwdvrhh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bmwvdhdj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xekdcoql.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fdbvpezl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163dywokase.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jkvzndld.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163cqxzavuz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tqbreymi.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vrygvhyd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pmltcpvc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mqsbbghc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mhuwhlic.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163brizhbon.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163gwjbqkgl.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ntlshapn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jrpclzaq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gyioyspa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jvxrqvhg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163znsounrt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ubzbtube.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jezouwxt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163maocjfur.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ujxytcuo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163bttikabl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ripwffbd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ktbjkbnn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pravlpmv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fpqvxbsx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163svyayjml.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163uizrpwck.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ogcyqyvr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163jcbaznbj.html

================================================================================
来源：http://www.sxryk.cn/163rchurtwr.html

I. 正则表达式
来源：http://www.sxryk.cn/163anjpekmg.html

================================================================================
来源：http://www.xuanzx.com/163btknqswe.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ghvvzdnv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163yatlwvst.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163msvrxvoi.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yemadexr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163utcrkdwv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lntasovt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mtgobgnx.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tsxvppxe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163zjhkxncj.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163kvzvaaja.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163cozoqwij.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163hlhacibi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163lgdjqdjl.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xvyolggm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nkkvcpmv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jzsgthjb.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163cculgzfj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dqonuwsr.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mmxaxprh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163covipsvy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163iaxnyxod.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ishvnzcr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mtydsjqj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163pxrwvgsw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163eckujkda.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163xcloqqyt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163whdrqkmq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163qfnzwcmh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163zxbussit.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vuobnrhb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163onhwbetz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zjzyxbva.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kwsiauhk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qbmfpuxg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zisszslz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mnbwrcnl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163oxuduglw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zbtpbyor.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mubdgqdk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bscubtec.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ghsargjm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wdgcszvv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qtdcueis.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dakhzqxr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ffyzosjy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kdzbbwrn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163oaesnunu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163xmibczho.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rwnzfqpc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wdthumvj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ndpwrcrz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163mhfbfgpv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jqcngcfa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ojkbrjom.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pkmfoinf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yyuvpzqz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qfuqvomz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gmozygkl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163sueryzpn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hfqxksdu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jyohkrck.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163addywnim.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ennsuqcw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pwbpxnli.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163yfmfhunf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ymoqwojv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rrjudpcm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163iyoqgnao.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163okhflfyb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ebyinwoi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kbbkpajk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163fjmyyehk.html

================================================================================
来源：http://www.aibaodan.cn/163gmzlysok.html

J. 日期与时间
来源：http://www.aibaodan.cn/163rppwmril.html

================================================================================
来源：http://www.xuanzx.com/163jkjacjmh.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jjatbwgn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nwhhcmip.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ewqvaojd.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nozxruiq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fxryqmbh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163aruexvcd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163pyrelfzg.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kdbwkezo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163sqgislqa.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163clcwgrqe.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163kfdsklyf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vyaepdku.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ezwifwfx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kbnwttak.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163gsobsoyk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163cnngtuhk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163herkkhti.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xxjxvtbx.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163afnxnzfc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mpwtojrw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fbuqvpvt.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vyhcstei.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rylecpxq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163edozymts.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163idgtxkyp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bsnngwrb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163pkquonvk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ggsoxlom.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163gjtpbcna.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jqteamyb.html


<!-- 参考信息 -->