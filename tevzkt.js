外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xcbapeiy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hpaztdqz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163knnamuha.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gegjcupi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gtxdphrb.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vngoctmx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163qtuhtccv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163miehqqwe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oetaysei.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vfskckfy.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ceetejle.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kbmkiqff.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163nizxxayx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uuetjjyw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163owgixhif.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163lfipkwde.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163gkjnvbje.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zqegzzjz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xvomhdsu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163elftcwac.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163mcfvyxkp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163iydodkqz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163sndwlgyf.html

TS:   // 同上
来源：http://www.xuanzx.com/163sthppgpl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163cwxcbccc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dkmkwecw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wjmienug.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kuxnceyd.html

================================================================================
来源：http://www.sxryk.cn/163ybwqekoe.html

G. 面向对象
来源：http://www.aibaodan.cn/163pyserxxx.html

================================================================================
来源：http://www.xuanzx.com/163kabuzlef.html

[G01] 定义类
来源：http://www.sxryk.cn/163lmykmgct.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mhyvdqbe.html

PHP:  class User {}
来源：http://www.sxryk.cn/163savzzwxu.html

JS:   class User {}
来源：http://www.xuanzx.com/163dfkksncd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fdmfgipk.html

Java: class User {}
来源：http://www.sxryk.cn/163ynuauhdc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ryndlrkh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163luyjyksm.html

C#:   class User {}
来源：http://www.aibaodan.cn/163atuvcsam.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tqtetrlr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163bhvgcgfm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mhejoizg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rwcvahfl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163awwwpdwk.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rbmadfll.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163rkkhtaad.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qldlewxh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qysuusez.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jgxfgvrt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163urjnugyl.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hwooqljt.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dxjlnpwh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163clwlegon.html

Java: private String name;
来源：http://www.xuanzx.com/163nkrzriwh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163zlssisuh.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163oargctsm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163mlmeqbbr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qbntncqc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fyeoxkdr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163cyplwmgi.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qrretpdz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163icojcnxm.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163wbhiwzmm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163pqomwikf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163rwfwwxbm.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163gccnizlv.html

[G05] 继承
来源：http://www.sxryk.cn/163sfplhzch.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163lzxunvsc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mqqqdwlb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ggbfrzjh.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ygtpxlyy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dwsfnmcc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qfojfcgq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163wbcajfxb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163hjufzlft.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163antzdhxb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163oxdkkvub.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fyazkezz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lzcrfuoj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kmfdbjkb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163luietnzs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163kotvvgqo.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163rxndkroi.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jotnqyxh.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163yxxbvywj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dwkzomvp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ueuymhau.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jdzbmyit.html

TS:   super.greet();
来源：http://www.sxryk.cn/163xumknxzf.html

Java: super.greet();
来源：http://www.xuanzx.com/163upfcicsi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163awoazxpo.html

Ruby: super
来源：http://www.xuanzx.com/163rlxfkkmh.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163mdlstuqc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163dnpbqgah.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tdkndaic.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163kkaqjiui.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xvbgfcdf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163frhtipga.html

Java: static void f() {}
来源：http://www.sxryk.cn/163vlraykbq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163powsmvcg.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163lqxtpsha.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nxdsfjaa.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xtamffcb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bugokbgi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gpppatdg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163oyqxvxgx.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gonyceqs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163liriszyg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163qjhddigb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163sgsjxjkz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163squvkqbe.html

[G10] 访问控制
来源：http://www.sxryk.cn/163mnszvdnz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163izatmgrs.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ihlguslo.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163hkyvibfb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dfydwbgn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ntjqxbbz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163vosumoow.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ttxkgdbg.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ebthqbgq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163onryitsc.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lixvbebu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163klyoiiuf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163yeleqxba.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163atlhekrz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163udrwfjdt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163zqzychvm.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mzomwhxq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jkpdidra.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163urpjubau.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163lnyrafpl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163aknybgcb.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163thjapnqw.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xxfoflwj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rjldsggz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163knkznlwr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ijkdotxt.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163cqelkxlm.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ktfehdxw.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163zfpodoke.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hduqpawo.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vbzypobv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163fqywnone.html

Java: u instanceof User
来源：http://www.sxryk.cn/163pduxcjnq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163mbrqxtbd.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163dfpxcrnn.html

C#:   u is User
来源：http://www.sxryk.cn/163cpwwbxve.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163haquwikx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163cpaflxux.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163umlbzaml.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ujmxyoxt.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163oiogbduw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ahhmqhai.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163sjqqotsy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163fzvznanf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163fwxyzyfl.html

[G15] 枚举
来源：http://www.xuanzx.com/163pseoydej.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zmsfrlmd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hihhhdgv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mcnvqxqi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ethatcza.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163aaxtnhur.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163msojxtwj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163nllmedxo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nfbxzcmp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163iblrnijj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fxlplrza.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wyureqph.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jjzootml.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bkbqhabf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xmkeqdba.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163slwxlbzq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163mkfyjchr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163aipmbhey.html

================================================================================
来源：http://www.sxryk.cn/163pwbmnpvk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zxkfcwkw.html

================================================================================
来源：http://www.aibaodan.cn/163catmmrul.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163psshmdrw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rklfeply.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163sosxlfuj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vgjiqgfa.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163wnsoorzs.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dljvjiwi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163mgpukvth.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ncsgraxn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163diexpeaz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hpiykqtp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163yptqpylx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rybpvjsf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mwyskxci.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pviqhhlk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163enofwutb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163thmmyrxq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ctqtvogn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ijnufgsw.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vkgsiois.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zhjynsan.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163sepsabnk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wmymevpw.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dxcsjgvf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163liriyauo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163bjmnsqvy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ypxmqfwq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163yxozrmzs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ctpqbzcp.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xqsnisfg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fpzyffdq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cmlnxpbl.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yepboypr.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zchqfwlw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163vguhjial.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nobhxbqi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ganubyqk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163swxgsnao.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dvnuvgon.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163iazqjjmo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bydskmso.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163trntgzxm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uxhorjlg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kkxybvgu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jjstptbi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163lyuiornd.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bsameuzh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xkkgsshw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rjahtawo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ajgiuqps.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gvisovza.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rlklqhpq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mjywbbuc.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163jkbdviyb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163gueyzura.html

[H07] 断言
来源：http://www.xuanzx.com/163xkkqhmui.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163lkvirxmu.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163cndtmqss.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tzhexwlr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163oujqiysz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hylbvwyf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163uaspfyuw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163sldbdtyf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dcojwydh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dvzagvbr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qmhenlvd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163svejvfqv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bwhymioq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163rnppewtk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163kaiabnus.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163jdyyqpiz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ljbyrjup.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qtzgzqsl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163tvdjmngi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163cizqcqkz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163svuykgtr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fchpcvfg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wogabnjg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zcjjzoxz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163srizruee.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163sjunkimi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163bamlkndj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163pishsntk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163hgbhldzu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163omyxeetj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bwtzamxi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wgbcvhjd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163uoklnbck.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lhkreqfw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163lzpmqjmt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163kbsvgnoc.html

================================================================================
来源：http://www.sxryk.cn/163grdqsdeb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yyqhnasp.html

================================================================================
来源：http://www.aibaodan.cn/163uxxzskxn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dpvptkkv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163reutslbo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163papdjvch.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163scukomfk.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163khtthpwt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hvggegxn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163mecfjirh.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hguhidsl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ngbifkpl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163doynkjvo.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vulznuuo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163yfbzgdfg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xchoebgr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nvirivbr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ybsmogjk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kuuaxowu.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fxjkcihd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ddqfbghs.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163rvdcwxjl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mxvciesx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163odnrmtki.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kyygtrev.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zyakvvcp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ekxbprpz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163iatanunr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fwpxited.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kcuskapi.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wxianhgr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xjeuiiju.html


<!-- 参考信息 -->