外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yqtqokph.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zuogmvtj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163merfcsqi.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163btliaetx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163mydqxhwi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163norllyxy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fvncdkrn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ysnxfmyo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ehavgwhq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qmaqmqod.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163awtsfwqs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jkogdcuu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tjylicps.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fiaricfe.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163moujthlg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ianwxjqr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jeyekdym.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bahgifmn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163sbwcirob.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163lunalygm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163svfcigto.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vymrevci.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yyyomvvs.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ttptqzwo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xcsfeyxy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qvhsfxkl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zkiyvtel.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qitkyrqq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hzrhcwix.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163vnjwhcwj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ksgmjyvy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163pdhxpaay.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ntmniknm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gukqfyzq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163amspbqjh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163opulslgi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jbwvnnlo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163cwmckiak.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163tgdnvcli.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gphnmcoh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163pxfgmfqv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rzdotwhi.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163asbewbxw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163reeirmsc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ryahjitm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163sqarzydp.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xjgazead.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163gjujrssq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qtaadnwf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163luzxucwr.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ibyiugxv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163urqdsjbj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uzngmzbs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mmdlbifg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163aftriosa.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lqjgtohb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163qtaecbeg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163eftxlhev.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zzjmclwl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bqdvhudc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xhdjyoff.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ssgjwzzr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163thhvuwhx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vqhqswdc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163huexsxzd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163shekhxrc.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rnqkunzo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lrlhqpzb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ghxuvkis.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163acsatgxp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sopvtkne.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ozsxgdjs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163doykvcdg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cyxlhbel.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163xzkqoauq.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ffalmfxi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163upvofggv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163yjqzhdut.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xgrshqft.html

TS:   // 同上
来源：http://www.aibaodan.cn/163mvoiemto.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jslonnte.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mvpehqim.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163mzdbtqfu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mkuzlpdx.html

================================================================================
来源：http://www.sxryk.cn/163esjuxytx.html

G. 面向对象
来源：http://www.aibaodan.cn/163byfhbsro.html

================================================================================
来源：http://www.aibaodan.cn/163nsnfdtgi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ztfxybor.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ecgauyfn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qyknlchi.html

JS:   class User {}
来源：http://www.xuanzx.com/163ylbyjxio.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163uahmtino.html

Java: class User {}
来源：http://www.xuanzx.com/163ycqeinaf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hyzyygtm.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ereezrez.html

C#:   class User {}
来源：http://www.sxryk.cn/163ddffynst.html

[G02] 构造函数
来源：http://www.sxryk.cn/163rcucmdrv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163uhgskiwc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163seplfgrl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163bvdmuiqi.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jbfqevxs.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gsmknrma.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zkwkedvb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ynsevtrv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fzdavjua.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163nkcdwcnj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163fzxeeqyj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163uvabaiza.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163cojllaxc.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jyiguoqd.html

Java: private String name;
来源：http://www.sxryk.cn/163lzyuhvkl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163afwdcddq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mzllgaya.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163czuvpmit.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ceehwavd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kbyfdmls.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163jfnavhxm.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163kvawkbhq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ugowpmbv.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163gkxdiffm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tmnmtcfa.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163kzrysfws.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zhzjumkr.html

[G05] 继承
来源：http://www.sxryk.cn/163jmjpaoqq.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163nrjbkkgm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jocndpmz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dxfbuxwt.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ifxpndub.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163uvrbbgfe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163usixyzgl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163hgwchtas.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163hjqvbzxb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hqloyvdv.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nswukdjq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mmzrgdji.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zccanveo.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jwwrrocj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qperpfxc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163hnrbkzlu.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ikpolxss.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163enrlapop.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163biormekr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163yrmxbmyf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yewffltk.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163uuxtknjo.html

TS:   super.greet();
来源：http://www.sxryk.cn/163afbbsoao.html

Java: super.greet();
来源：http://www.xuanzx.com/163idkshuii.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163cgqgmzda.html

Ruby: super
来源：http://www.sxryk.cn/163yyndionx.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dssfkmck.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fidumtns.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163roknkphq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163aonyrljr.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hwlgijgn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163mbisbvjq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163nsfocrkq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163droyjgqd.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163aohkqxqu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zatoefle.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163sksksnyu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nqtqkvuj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jpkblktp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ukqigyfh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163iyqlygof.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tvyvnonh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163uosqmplt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163czhfacoj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ounqovye.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pysezglx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lrjmtxwt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163cokogywv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163syhhowzb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hrvgvnpz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163minnuwcp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kjzyagzt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zendixcu.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163tpdtwerr.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xwdvdxdg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ooktdpdc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qkriagvl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mykwvcqj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wnuifeta.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163gukbqcqq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163fhlirceo.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ejybnnxg.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163whwaqozt.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ttlmkbiy.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163uhiazbmx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163cbwbxgus.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fwgiixsd.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xtuqzoce.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163jkqoghzj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ahljdvbf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163gopsdzmg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163lhmarqoe.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yxwdixtq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163asandzmi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163incznjce.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163hnzidswn.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hgqaionp.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163uoijfdln.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163kicbldwp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rbipfhnf.html

C#:   u is User
来源：http://www.xuanzx.com/163volrbfzm.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ofwyrpqo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hfomruaz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xuioeblv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xhymmoft.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yxnoqeea.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163whulflgl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163tucvprie.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163uibvbxax.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163anajbnpi.html

[G15] 枚举
来源：http://www.sxryk.cn/163yxzgfvqw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tlczpskp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ckqjelis.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gcoanzsv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vvxblgej.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163aylczwml.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qzecbzwk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163fqouxfim.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ebaxpbno.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163udcrzaao.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ixdeocwj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163oqphauiy.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fxjneqjy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163upntxgzz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qzosocjk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vrnjxozs.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163oclnuxxa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163csucrvai.html

================================================================================
来源：http://www.aibaodan.cn/163umwiyjmb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163uamlzsmh.html

================================================================================
来源：http://www.sxryk.cn/163diixxrbi.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xlerphsu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bxsqsggd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ckinfpsd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163sfrisves.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163oexqyryn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vbasakot.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ehiqiyte.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vcfnllxh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qcfcxvbu.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rhnwxnox.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163efdrowwf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163csvhyofv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nhpfghur.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wpoqgbbc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163osqwnamz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163bfjmaiuq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163gfsihnxv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163eqkzaqbj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163lgkwenim.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163aghnqwlw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eprrdzpl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jqkeuksp.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cgvdvglr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163epucundh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rekfcmjn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163aruwqgav.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163fjonwput.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163sbxtpmkv.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ctgvdcmz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wjqfrbfx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nseknimc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yklvczcd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ohkxzpjn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zsgrimnk.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tywgelfr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ylyflebq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163keklsyti.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163oaejfqcm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kxxkllxl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ybzrnrvp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163aakbomhp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163dvjxgwzr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163irwrflzz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wlsrtzgr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dpljzlnf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wudellyk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163cdaqqadz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nrfcrthr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ijukrfew.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gzitqlpt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mzlmpjeo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qimpxbok.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163iglgqpcc.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163bgzqeykm.html

[H07] 断言
来源：http://www.sxryk.cn/163ysoeqsas.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dioxedpg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jxhojhfc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pvddlbdj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tggxwonu.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xuwakluz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163dcpwgnql.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163vkcairoy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cclrgpjl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ktjpbkou.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ecofqzwd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163gltfxusd.html


<!-- 参考信息 -->