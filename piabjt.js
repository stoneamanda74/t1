外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mqhjnuvr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163nngjujno.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163opxbicxf.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163pdzqmnhs.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ffomyxvb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qryndtcd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ojhqgubi.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163psewaudm.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163sbgcygsq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qkztddtg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163cgroftqv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163axgzarrg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bogrposj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jzcphgfp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gmsvbthh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wfqnmxlp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nnqykrmi.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ywvsmdno.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ahnzewku.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163durclhpk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163psyvmuae.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tdznkjwe.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ntgivccy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qrsquqwe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lraotrop.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zikojczo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bgrltfos.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lxaqepps.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163mslzwxss.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lddsifco.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cebknuqu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xicppzvs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163yuzxvuib.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163axldvcrn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163bahtkgxo.html

TS:   // 同上
来源：http://www.sxryk.cn/163arxxssrf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mlbrrehq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ayqwrmgx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163aedragfh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ndatwgjo.html

================================================================================
来源：http://www.sxryk.cn/163sndtwuxx.html

G. 面向对象
来源：http://www.aibaodan.cn/163ivxjgfpe.html

================================================================================
来源：http://www.aibaodan.cn/163jivhqeur.html

[G01] 定义类
来源：http://www.aibaodan.cn/163fznrgiej.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qyctyvev.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ttcdkaql.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ltaeodfu.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pzksgexs.html

Java: class User {}
来源：http://www.xuanzx.com/163yavwxhyl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jtojgxex.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163eveloatl.html

C#:   class User {}
来源：http://www.xuanzx.com/163sibzytyf.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ohygduug.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163hejjqowr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163gmmtjrgq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163suocscgg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yknizdkg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163cracfatg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jzanyiqa.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163phvguylf.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pqagmjdd.html

[G03] 实例属性
来源：http://www.sxryk.cn/163bremaloq.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163vidjszzc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163witdbfzo.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dmoyyxkc.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xxyzvqia.html

Java: private String name;
来源：http://www.xuanzx.com/163ivxduefq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dmttplyh.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163utexuctt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lgovehir.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163xbcgqprz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163afblezkz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163jsupunjg.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bzvfpror.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163zrvdxuzg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163fqudoxkh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zhsvddfx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lywuefvc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dymsgree.html

[G05] 继承
来源：http://www.xuanzx.com/163ekdeekwx.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ntbpybas.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bcqbzila.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qsijccan.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nkedmpox.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vxhxfmus.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hqfbisom.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163xqtuehsc.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wnizbcju.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wvcjypdz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163yjrseage.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cadavjwe.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hclyhwqy.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lboaoxse.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163dlszicxd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163pvotmzts.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163sipihxnh.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163lzxwhioo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jucpjotb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163iiibatjs.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163spluakik.html

JS:   super.greet();
来源：http://www.sxryk.cn/163tdlxocjt.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cdgyvohw.html

Java: super.greet();
来源：http://www.xuanzx.com/163zioemljb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163qigchwyr.html

Ruby: super
来源：http://www.xuanzx.com/163ukigptbl.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vyjeutlz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163uyedewsa.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gvrfvydx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zacaccae.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dditmuyr.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163uignwnul.html

Java: static void f() {}
来源：http://www.xuanzx.com/163errnvllm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rvtkzrfy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hlgovida.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wwoultqn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kejibwbe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163msqevaey.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163owhzvuej.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xilxkdbx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cxdaqtwb.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dghfdfot.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163hyzttvdz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ntjcbren.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163iaglbyda.html

[G10] 访问控制
来源：http://www.sxryk.cn/163owpwngbl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163devrbgyn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163nfdkrebs.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ccneahbk.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163xnfiayjs.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fsqcquls.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163fkouhxku.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163xsgakzjo.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163oqtscnjp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163fvpmznox.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bdepiebt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163rnzgxqyf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163syxdrjsw.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wnkiewvi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ojhyecvv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163gocvstxa.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163yodrdfek.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fzpgvsfy.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wqakygkx.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163gpqmndrc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163nunzbyug.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fxyuxxfs.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163oelhaoqb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163bxmmgvry.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163celaafoa.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163pfsklebb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163qgefryth.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vvwzyusd.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zddkrgkt.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163nojhhsuu.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163sliuiobr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wjkxjxvn.html

Java: u instanceof User
来源：http://www.sxryk.cn/163tfsqdjnd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163lowzsuvz.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163gfliviif.html

C#:   u is User
来源：http://www.xuanzx.com/163eirosgdn.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163cgilychf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163cmaymkua.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jvbpbusk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163kimhvfqz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ppaklsuc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163bvbvgaet.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163spifylie.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163fbropcdb.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163kfmwfeso.html

[G15] 枚举
来源：http://www.xuanzx.com/163vdhhmiql.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163yndrnwlg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wvpdqiuu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163bwxrroiv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163frrhkmaa.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ieuggdnn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163yzihdtru.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163edqsluzn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163oytlkafc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ahiiaqwm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163meywlqit.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163gnuhwhoz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zquzzqke.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mlaacmjb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163euhzjyki.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zcdlqmex.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163seaptpjb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ugqnssnf.html

================================================================================
来源：http://www.xuanzx.com/163kpyvirky.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fytkrujx.html

================================================================================
来源：http://www.sxryk.cn/163istbubrl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nvwqkpyu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163upcoybmk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163aaagymzy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kzsvkvtu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tkkszyrx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163avlynptr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vakotljh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ljmnohdl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163woblinva.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jgmwfnho.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gvzllyse.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nevyvrmp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qomydrux.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ixemfklw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163buaujwkd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163hpxlvrur.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163psaofqqb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163gtmrtnhb.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163htqkoyyx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zfvkropj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ouurjkmr.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ohbzvitz.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wauyvnrx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nifiloht.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rnguzxzu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163wcoofnuv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ytgoetts.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163dofohbwv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163mdolvnbq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ijrdfutx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ljonnxim.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163aphbsffn.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zodgdqmg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163gnpitjom.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163wkxnrvqn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163gqkhpaam.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163inbutjba.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163gtqflqjf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163whsfktzq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gxrqaduy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xuqirppt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163okwzqssf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gqfxmkkc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163gbwdfvif.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fdrwjrzx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xkmirhjn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qhsrebhb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163mklrdqlw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pvovnmtc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kqyokryw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163svpyxxnc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rmtyafbb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vhahwkpb.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163mqnssyvk.html

[H07] 断言
来源：http://www.sxryk.cn/163prwndtwa.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zczzuido.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163aqftmgdg.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ikkdqheo.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ucmxhmlb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ummdlrqg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yvafwsby.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163nlxumvkz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163xopzzbxl.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163piknssha.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163rumxpkwn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ymistaey.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yaxydhaj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163yggicfry.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jxvhtplt.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163muuosgpv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163csnbojfk.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163plknmdbc.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163pxsjhckb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vrtugaii.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163iykxkbnw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163hwhgkfpj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dsdiizyf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163fgujvrun.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jzqbfjqf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hbxkwbqw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ffcoudtz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qjifdgws.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163brnzvood.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lijlrspq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163icopqyzl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gkyyzwsu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163owkjxqbh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163jhuifpti.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163yqdlvfjs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ixiccgac.html

================================================================================
来源：http://www.xuanzx.com/163piyqeqsi.html

I. 正则表达式
来源：http://www.sxryk.cn/163zlyteafu.html

================================================================================
来源：http://www.sxryk.cn/163jauxtfns.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163yzigtmek.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163adwxblbp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vacbsrac.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163quumfucg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163izbxyfil.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163qzjminyc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163feembukn.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pnqdecbj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163muedutyo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163syogwrvg.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xkruyihn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163apcgcobq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163nyvupexv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163hysvkrff.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163hjxgfnwo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ozeubzie.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163znhgvsdu.html


<!-- 参考信息 -->