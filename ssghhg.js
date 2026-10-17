外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rsoatahr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sfgntana.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fiemsjhc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163azqawbrr.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wpbhagww.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163bdvjdoze.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163wcozkekq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cdbtpuqy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163efikzndw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fihrqbxg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vysuitxc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qlghovgc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pvzcpgbm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163anttosxn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ogaehoqs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163kndwutnr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xbdgejqw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mtbxzdtw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lhnbjsgy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163clrsyipc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163giwfhdtb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163edlngkwm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rnvskvpv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ryqscqez.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ftlkqdmv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163bmtcakos.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163aivpvgje.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bsjfwjcb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dvkqjphp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mlunoiis.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wnibdwkr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jgoljsbf.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163eyrtdodd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163mymlngje.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qnhiront.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gfrppbes.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rcxciixy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kjrhxizd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163xqezqnwu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lkndcrap.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dpcqndml.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bsagylhy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kryjuobi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qfizqafn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bqrqhgzz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vuxxstcr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163jyawgomo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163fzfhieoq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163doifryva.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163cdfoecgd.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jdarxbhj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163degxsbzu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qkijdhsv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uhhsgegs.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ngklegmi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dnhnnfsn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gwptdoqo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gcsveqse.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163gjicetwa.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163jhtpmhkb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xrlhgupy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hlhkrhsl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163vmquuaxx.html

TS:   // 同上
来源：http://www.xuanzx.com/163mpntjzea.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163psbmetrw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kjppbalq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rsikjgwx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163yyautknh.html

================================================================================
来源：http://www.aibaodan.cn/163deojibsh.html

G. 面向对象
来源：http://www.aibaodan.cn/163eoixxbum.html

================================================================================
来源：http://www.aibaodan.cn/163juymekyc.html

[G01] 定义类
来源：http://www.sxryk.cn/163npbcqrdy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bjdmsfdx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163obmudiyq.html

JS:   class User {}
来源：http://www.xuanzx.com/163vmyraktl.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tiwldstk.html

Java: class User {}
来源：http://www.sxryk.cn/163ykkdlpsg.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163eiyokbih.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163qbliqhtn.html

C#:   class User {}
来源：http://www.xuanzx.com/163corffxjr.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163eannameb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163obttijnn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163jwihyzxd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bnkhpysf.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163akjsnswz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163emodgqgb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163agcgxkto.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163pnomffbc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ixnobuks.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vvnvttss.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163adsflebj.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163tmzuafar.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163gdaelvwd.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hmphqunm.html

Java: private String name;
来源：http://www.aibaodan.cn/163epwgwksm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ninyuujo.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163oddrpprs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xwxdsxiu.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pxcssqnb.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zpdrbcyg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dcnkrlkj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163giryamyw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jgxzetcd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163silwttje.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ylwcsmhm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lvwegard.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dwgddozj.html

[G05] 继承
来源：http://www.aibaodan.cn/163ldrngfjl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zpcnkyey.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163difxkcns.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lmrytzyq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kraiqncc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pckgwrjh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163uhvyczmh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163sfolfaqb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dqwpnawl.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vhzrjixw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163oopsibic.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mxevmfrq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rzfmqmas.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dvtigvqz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jekzdfnf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rjzufndp.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163sxnhzoyv.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lyctwjht.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163sjsxqvap.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hnsscksl.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163gvwrsoaw.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163dzugqrvi.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ruacgefk.html

Java: super.greet();
来源：http://www.aibaodan.cn/163eiskqcfg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zowpkaag.html

Ruby: super
来源：http://www.sxryk.cn/163aofmvjkg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163egzqawyi.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tiqarbmk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163arydkhtq.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163liesppwe.html

JS:   static f() {}
来源：http://www.xuanzx.com/163osbumzhd.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163wxrbteps.html

Java: static void f() {}
来源：http://www.xuanzx.com/163sembbyow.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163aiynmarn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kprbvfvb.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lpcbatrt.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vvmrthoh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163gmfzyfyr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163apdlumsf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fqfrdnoy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163kwhuymkn.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dynleixn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163rhmcwdef.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pcwytnjj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ksftufih.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kamisenh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cbpwerea.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163kpnirbki.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163gmzyzypw.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jfpaexgu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ewcicquf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xfselbep.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163svgzgahz.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163adrmbnmm.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ooawhhue.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dfivauka.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qkkksvxc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163svfcqnzi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ppzcirtd.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vcgnqnvi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163tkfmobaf.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vzedpsiy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163uykklkfa.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cvnbzoim.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jztwqret.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163evwkdgzs.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163cfnfvihj.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hqfrdlue.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163jhxgotik.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mtwgqntb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163nfrtwlyo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ecoyelzw.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qtgmvdle.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ggwspcqb.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163gbakrhls.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163hjfcdxaj.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hidsyjuq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ojjlceya.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pdrtybfk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163urkiwour.html

C#:   u is User
来源：http://www.xuanzx.com/163clyaptjp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qunpzuvn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ozhetlvw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163sosmfvjr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163aqlzjhfa.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163sbtgyvcd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ogmxzshr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wgxziuwa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163tgsgbyza.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qsiltuyt.html

[G15] 枚举
来源：http://www.aibaodan.cn/163tzgvhlfn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hrhykbob.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ohqgpdvj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vvmkaiap.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sdonjoqo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rihumutv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163gjrhhdkn.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cyofgbqy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sshrthmz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163yzzjfwja.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zohzgxpp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ufixlspf.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bfatmxof.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eufwdetw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vkifalit.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rytxqzzo.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rkvanybg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ftuvrlgr.html

================================================================================
来源：http://www.sxryk.cn/163ffklscja.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163hfnhehcw.html

================================================================================
来源：http://www.aibaodan.cn/163ytfelnrc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pcaimfnj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163vaxkvtpg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163pgcnigvg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qcyvbztt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163movttwlf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163naczxewi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qmhiigry.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163nouogozs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163kjijlgqr.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163cgucayyi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163oenuwvtw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gfozgwvo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ocyfhflq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tiokrdbw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mhpgvnos.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ypmprfxg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163elxgspbq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163emxlysgc.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vaaflplr.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163oxtmiwbx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rsryahwl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163psrmskvr.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kllndfdv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163wmgmrchf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163uwpcskvp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tviomhsh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163msssmbbw.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163onhyhkqs.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163cscxrveh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163slvztasb.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qmvnhges.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163akyjrsaw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163xrherffm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163gicfxxyy.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163vbkqzmtp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xdfoapyt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ojbtzwxh.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qymccrqc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bhkungya.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uoscbvqs.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ozsrrvoq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xmhajehx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163zuegupxa.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hxiypdqr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jtkzflwp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jluxnngt.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163riakrimj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zozaxqtl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163khbyawlq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pmntohvo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163bxmclftq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163yuzifgwc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ezwjsvec.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163smfambqr.html

[H07] 断言
来源：http://www.xuanzx.com/163zwlwbtba.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163okocqgki.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ykxucyzy.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wyilkkqd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wfyttdho.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163aiqtmevm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nlopigpz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zqvteepb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kiodbbik.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163pvtqphnd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wuqxgpdh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163btwlllgf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163niqpvsjz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163fxeuggrg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163yabnxdwd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hsfnlnvs.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hpquqggc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163eilfmezx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ctityfyd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tzqgctcw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gzckamgr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vkyanejv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163rmxizjez.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dvhzgtnd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nhbwpvgm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hizzdwcy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jjwlcggq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nvfursqd.html


<!-- 参考信息 -->