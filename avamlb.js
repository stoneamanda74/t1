外链999!wailian999！

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kqtyvktr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fgqlvkqz.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ltesbirk.html

[G05] 继承
来源：http://www.aibaodan.cn/163kpkmfozf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163brcvvytx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wvykskyp.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rjnvspce.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163marhuops.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pldinxgq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163twcouwpo.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163uydimjoh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jngbcagb.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ymkikvih.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163foonjlcg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163etazisgx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cxoxgelq.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pepexsqg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hyoebqjy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163rnmqtmac.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163tabkozro.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163swkzalmr.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mwfzbhjv.html

Py:   super().greet()
来源：http://www.xuanzx.com/163idoxalsj.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kxgxpmpn.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jqcvfgpg.html

TS:   super.greet();
来源：http://www.xuanzx.com/163wcryakyh.html

Java: super.greet();
来源：http://www.xuanzx.com/163ybikbjiz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163raaydeqq.html

Ruby: super
来源：http://www.xuanzx.com/163suwscyvb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xajdrizs.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qjihyoey.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lpdteioj.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ctgrryvd.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jellqthv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163kecdbzxd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163seqmyndh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jdklekzv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rywzmdqh.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163sfiwpbdi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nftwufit.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nagsxidg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163pxoublqb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163anjerlqn.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163weibcogc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163xzxfcewb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163pcymbybp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kaalbuot.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hkpfetch.html

[G10] 访问控制
来源：http://www.sxryk.cn/163sjwumzfd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xqxlnqxp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163brzzxriv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163tsbnpkzo.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163goixvyof.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pqgscwlb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jdpylybs.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163psgvexih.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163cpjhzbes.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xngdnjri.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zakhrygs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163tadhpkvc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163twffaobi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gbymtpio.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ovopjzyt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163biujjyyn.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zoupevjc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xnsagarc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163zqxkhmfd.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ienxiryr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163uylypebn.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163tvrgxljg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tpqfojao.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163sbrtnstt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163htvksgmi.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wjruokuv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zinbafea.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jtjixqdj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163lxymsqja.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163wjumgbhv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163kwkpfgvc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163mkmclzlx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163quyisakn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163jwkgswnq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163mnbiydpz.html

C#:   u is User
来源：http://www.sxryk.cn/163nwgajvpa.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fjajhoho.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ibufvynr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163yqnhqmhh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mriozbch.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vtlpqivt.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163clmbekxr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jbtxwnah.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163arsxynfd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hgbfsukw.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gnptzvcc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163izkhuczh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ejyqpslg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163laoojjlb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mzglstbz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163cimasdtc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163utrruhcq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163peqsjljs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xjejbuiz.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vvgaoqbz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163glzhimaa.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lbjkchah.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163uirxoqls.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vdbqwbjo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jywiqsql.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lxanrtek.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ckhqqrdp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ngbxcfpq.html

================================================================================
来源：http://www.aibaodan.cn/163flczzxgb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yuqbkdky.html

================================================================================
来源：http://www.xuanzx.com/163tmawossk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jsolmwyp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ljwcvupn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nddjkedl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wowkxthf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163akigzyir.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lizcoerj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vvcnpfzp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163hjfjqjfu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yesunqlw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ppzedckm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mvichnjd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hgclghpj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ocxpfgpb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ylxwrhzp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nnocvaoj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rgyssdbx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qumktxxv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163byyiiece.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hwfjqped.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163icetgkdb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eawekvar.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dvkhpvjp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qvqsvkrt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163nqojygpq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mantnjza.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wprriaqe.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163khxwgrgt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163jwcdhmbt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163kfsldjyo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163assoequd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cdusxkia.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163saqhxoau.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bgrmqoid.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163jmcklaty.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163tqpaodcg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163vqzsxrcs.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163axluldko.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dwnppdrr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163mqyshrml.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uwhakuwf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163slivhipg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jmobtvar.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ziergftz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ihybshqt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ywhadaqq.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163eefectyr.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163gvnedgqg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163znobtbhn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163urhfazmg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xtgfavwc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163juuwmzmj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163pgbzlrdu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163nywoplvm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163cedtbtnw.html

[H07] 断言
来源：http://www.xuanzx.com/163zgyfjhwa.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ezikwasi.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qhwoahed.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163aiygzqec.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bvesymbu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163epyxsjnd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vwdmgadv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pezlumts.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qgvpquer.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163fwhxlpak.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mmigtdwl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dfqhybbk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163skfbwczu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163absjjfaa.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163goahmrjq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163jpamdpir.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ktsumlxd.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163gptdkgiz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163uefhfrqm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ohupcvoe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fzkreozt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qiiwatsu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163xrhaapsn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ewczmzqs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163udkpfeiz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lqtywjzs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163odkmtbiu.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wyrkstzm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163igyindha.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ukpzfyos.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zlbsgcxx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163glvdqtxg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hfugxsdd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163uwrwktjf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163scpjgnwh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163zfwdanlo.html

================================================================================
来源：http://www.xuanzx.com/163wbcmchmx.html

I. 正则表达式
来源：http://www.xuanzx.com/163kljuhbvr.html

================================================================================
来源：http://www.aibaodan.cn/163vwojndec.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vrtcavbd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163nftifdqr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pjjbgcqb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vqxpdyzh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ffuahdmb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kxznngkb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tcekyvwd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jsovjkwz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163esvrnftd.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163rmbhlaxa.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163eqrnnjtz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wfniabui.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163lcguixqz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ngqovejs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163rminshhh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163vjlekbic.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kdvzlzfj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vzdqonay.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cvuyyukx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cdpjcvjd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163buqzruwg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xjyucngo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163wfayshuy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163drxqxknk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cwwnsurz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163avjiaoyf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163qqwtjobg.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tvmfwxey.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ycfrovri.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wuhuvich.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qddxyenk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qdjzhqdq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163uxdlvsvp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163egxtfmgm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163clyydylb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163fugthrbp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163cipkinqe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163bmqdlnlx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163poqzlpnz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wiuczwse.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163avmnoxdv.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163dbcovanq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163uqjsrsxe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fslpypxx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wbfmcucx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163byhsiygg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ybwovfmb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zhwmfcuu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163shwgncnq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163waslxeok.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163srgdnyow.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163bksnfjnl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ylazhesp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163sudwolqh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163toizlcoh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163dbocnncr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hvmgdqhd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zzfrpakm.html

TS:   /error/gim
来源：http://www.xuanzx.com/163afbkosfb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163keuotqig.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ryvzdpbx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wnpdsusl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mrkhiica.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wtmyrnyz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163sbgzuple.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kmkftlve.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163obxmmwmv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zkmqgbuj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163koinshev.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163kxsidoro.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163bjbccnpu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tbrnwdcr.html

================================================================================
来源：http://www.sxryk.cn/163upkjbmuw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163fcmoqbkw.html

================================================================================
来源：http://www.sxryk.cn/163vsxjpbpv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163gtjaiukq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ugrvuwrs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gydxrcnl.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wkdlkxjh.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ezhawzsy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163iuausgpf.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163eruwzaut.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gokzvudi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ioypvjsv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163bptblcnd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zovqqlix.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qwabttyr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qarlvfmv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163omybaceb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wkvopgqc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163xfgxhpzv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163bltznptj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163codzqvpa.html


<!-- 参考信息 -->