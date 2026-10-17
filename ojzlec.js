外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nikunprd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163laqezcuz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jmnvfpvy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mkdoektt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kvgptnfn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mqyaixiv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163trbvwozr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163puoomfoh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wjzqjykf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163katayyyr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163pyshdnbe.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dgqufbkp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gtdhuxom.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ixcjtolo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163kouaplkf.html

TS:   // 同上
来源：http://www.sxryk.cn/163xzxnhuyo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163bdmpdqwv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dzmbrmqv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163yimcoflq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163fjhckdwp.html

================================================================================
来源：http://www.sxryk.cn/163vpnhuubj.html

G. 面向对象
来源：http://www.xuanzx.com/163edqnjbvk.html

================================================================================
来源：http://www.xuanzx.com/163sbpjcvax.html

[G01] 定义类
来源：http://www.sxryk.cn/163xbvdzobu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tsqvdrzm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163sjsvqmum.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ubzznrxz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qbsymyno.html

Java: class User {}
来源：http://www.aibaodan.cn/163fcnsgcee.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163mankwmgp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163dgvrhmmj.html

C#:   class User {}
来源：http://www.xuanzx.com/163kyjrvkci.html

[G02] 构造函数
来源：http://www.sxryk.cn/163awlbjzpb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zeizbmni.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hvlhizlq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qiwjcumg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163nztplrtf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163cyxdpicc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vfffkptk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163lizhulmu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163sxkvpqgr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163tjnvtrhy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163sulyawcd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163adriagwe.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vupyulmj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xielipaq.html

Java: private String name;
来源：http://www.aibaodan.cn/163fjdnlewi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163bdwtesyx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wegghnkv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tawvvmsc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kxovwegy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163aksbwziy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rzpgkwjp.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163crxzllrd.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wuvoxfmk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xpogumbd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163pretenzy.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163yerszpur.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hbhvhqpo.html

[G05] 继承
来源：http://www.sxryk.cn/163qaglkico.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163afzkslui.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163netdjdhy.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ajugpzhf.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nqgkofol.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163njjuivzh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163uwvtptyj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wllpjspp.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163agymjkyx.html

[G06] 重写方法
来源：http://www.sxryk.cn/163htljefnu.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163anhjlyko.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163yhpmcxwi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qmuujtmc.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hzvgxwqz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163gfedvrsk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ykkqnvzz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163czxzltkc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163enetzwzx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163kxresfdk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163owiltajo.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xdxghxun.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hohliphs.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163fcfnijcs.html

Java: super.greet();
来源：http://www.sxryk.cn/163xzgkbnae.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vecvgvur.html

Ruby: super
来源：http://www.sxryk.cn/163xeqxwcap.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163cogtpqvi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pqujnhwi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pbhaduhi.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163gfmphvwt.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kchjdrfs.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163scqzozrj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ssdzdwua.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lzutvytq.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163cycpcccl.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bytpcsnd.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163byfncmyw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163fuewxpbv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163bpocbgjr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163hytxnwfa.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163sidfxhme.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163zvhgwxuv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fbyemulv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hdxnwroo.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163dflqacxt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163nieqczsb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163fphvghkg.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nafrtjph.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163tpdokoju.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163xquzwkrp.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fcewkrre.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ttlfyphs.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lepcsmio.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fqtkgaci.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163pqbefqdr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163umeqlyyb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xmbsiilb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163vuatlwiw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163owoccqqv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bsqrfiad.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163atavvrjt.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ewjqplil.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qvsgxqvo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ltmwbeoa.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ditxmeef.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163idptylra.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xhimlnms.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163aiogdahj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dffxbspx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wfhnijrh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kiywgpoa.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pqhbrxbm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163byhhwtmq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163qttokhdn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163jtjsanzh.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163fhroatvu.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163cnahfjyb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163prclhtpo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163fhqsgrwc.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hvgivtav.html

C#:   u is User
来源：http://www.xuanzx.com/163dauphwkm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fuodwdnk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pcqgnltc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163bprglsid.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163gynzthqq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kwiwfrgo.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163yxpobxsy.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163yweeeavb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163nwhwvqmc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163nqzecxud.html

[G15] 枚举
来源：http://www.aibaodan.cn/163qbxyrseq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163iosebvdn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bkakbahe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jqynbcqw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xghribvj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zeltkjvf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lbmecgme.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gmnuqdwe.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kmrwskzc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kxgthycg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163yzaallpg.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163puwogksl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dzrdpgig.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nnldqhqf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163awyhfpam.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163yenddmxp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163evkxznrh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163hzzpxyll.html

================================================================================
来源：http://www.aibaodan.cn/163buoioyjq.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163quoznjpq.html

================================================================================
来源：http://www.sxryk.cn/163pwpvldyt.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163tgpmkowj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fzfohult.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163iobfrbvu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163umyzqbjr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163bcfsgybf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163orynlnkc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163utqwakno.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ygksgteq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dwwukzgs.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163uipgfkca.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ocvtenpb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rvyanztu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kwgbtzbi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163caugqxyi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bkfrshtb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163esoehtih.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rvknwghl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163rmycyimt.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ryprpdyg.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163pnvsfejn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163isiwgjaq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zzpnwgtn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wiaoizfy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163udxfvwhw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ewlcricd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163uuswhhnu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163dgsboned.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163nhgfungb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vstsxmuq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163yjvlfggx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gcqqayyx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163owftrlkc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fwimunrb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163sivzthel.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163sdpvwser.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ogwwjxvr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xhecnfqg.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rmafhgxx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163gpvclkzn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163swxaasgt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xqcaaflz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ejtwxwxw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pqiqoaqr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163egvvbxwl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ikdwimxp.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163tkiutdcl.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ndhuszdj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jpiuaodr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nvhyqnfo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rwfnfwfq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ahzqfbtw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ycreczef.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zefyqgea.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nnftkwef.html

[H07] 断言
来源：http://www.xuanzx.com/163sdlajrnk.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xhgtycom.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lypvanyw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uhrsbpll.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rnxubczo.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163nohizkpi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163uswyntkx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nvzbdqaf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ykrufajb.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xrjenqpu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163rkejuypn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jczpogym.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wtrmyewk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mylrqhpf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zphhuxso.html

Go:   err.Error()
来源：http://www.xuanzx.com/163cvxseawa.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163lwbunyeu.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bzuncstl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wtbevybs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163bvkuxsqp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163sbblpzfe.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163rspalirs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fidbubqy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163nnocfikz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ttcbtrze.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ouvyscxz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qtnshznb.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163bdidjuhx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qmuctvzo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uhnstlmz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mwawlomj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bxxbnujq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163obfxvfoo.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163apysyrqm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jcnluton.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163guaowwzl.html

================================================================================
来源：http://www.sxryk.cn/163homcuxaj.html

I. 正则表达式
来源：http://www.xuanzx.com/163rijkizoa.html

================================================================================
来源：http://www.xuanzx.com/163qmsilpkb.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163yuudyokj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163iinjjpgk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wwbdnrkd.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lcjzgaez.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gxsjcqgd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wwxtnhta.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163affyhejt.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ggexwkuy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vtxhdfzw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163updybfzj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vocgueyv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163oekrgleu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163edfvujlu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163mxyerpte.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lgzmycaw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jgkktdrk.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163igvoxssw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163lhfffmwf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163kvyhxkou.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tigbywbk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163thccjoam.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kdnqncaj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nuekpuyp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163lqhbdwxm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mkvkguly.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qaezrjwm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vjswnnlo.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163blvxheus.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mxhhhapp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fnrkjecd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mhscbxpk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163meeurasn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zpzmmozs.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163fhajsuut.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163imsnvzub.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163htivhfwo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ntesrqwj.html


<!-- 参考信息 -->