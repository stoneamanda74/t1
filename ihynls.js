外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163uuzzvqoy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rglzzjot.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ecyacjjx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ntcjvpnu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163uhowddnq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kwrgrmxg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zxbbrubw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ldeeagyd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xxhmxqcp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163fkqnwtyg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ndcydlvv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163criikfdm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dqaprcgm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xewezmsd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163dfgbzgby.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163graeprua.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163kmiwgkqq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ryakgawu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163lvoqfide.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163awvioxlg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ghirimnj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163luripfdr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mnuukxpx.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qicmsozt.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163omrxbyuh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163nivuiqpc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qkecodxy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163uzmmalvw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163aftkalty.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hkrgnczr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zhikissz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163adokjhbt.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vlfecsxi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uuozfsnp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163mpxxwbnm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163neiumnxq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xyxoejdp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cvnhihit.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mvwjyzhc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163hdvwbjvm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hcnpxrud.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pwhcugez.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mdjdfhmc.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zszlughh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jciqkhsb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lhfyfxaa.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lhfonjxg.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fqtnuykw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mqoffqoq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hjnfqmkh.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163rmavzsxg.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163knjjnsbk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163absrozuy.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jtepgbai.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dzgthcbp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nuphzwey.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ftlfkwtn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tkpripgp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163zdixlfqy.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kueqpxuk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163asfdwbpw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163khsmdklg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zqqpgwoa.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ymyvbjyo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zepywqcd.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163fcmoubyf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163cymorfxc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163nauiewii.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ymfkyvzc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dmypnlwq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rlxyolcv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ruveodql.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163dageuaal.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hbdfybab.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ikogirpk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lkviqmzs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cqgfnwuv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sarwpdfg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wpnthalu.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163dgkvfpiz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wrezsijj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163vvdhbkfu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rkireuto.html

TS:   // 同上
来源：http://www.sxryk.cn/163lfccbkuy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163shtfhhym.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163kgoollob.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163edtjvbjt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163livxhffz.html

================================================================================
来源：http://www.xuanzx.com/163wggsszgo.html

G. 面向对象
来源：http://www.sxryk.cn/163yeewjzej.html

================================================================================
来源：http://www.xuanzx.com/163vhhanuso.html

[G01] 定义类
来源：http://www.xuanzx.com/163bjnexllq.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nouaunst.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163vxyccmci.html

JS:   class User {}
来源：http://www.xuanzx.com/163vzkbtblf.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mybvfavm.html

Java: class User {}
来源：http://www.xuanzx.com/163gqkapxmt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163foucarsh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163liqwomzg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qvnkodyl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kssxmtyp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163nxgkuvmx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163nhdewxzn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rollrboq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vndkyazc.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qxkokqqo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cdbdyfyr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163eensovyx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163dvxxwced.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163rpafoytf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mqapckcb.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163oefthxrz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163xitmuwxv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lelfjltd.html

Java: private String name;
来源：http://www.xuanzx.com/163avwaymuf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lapfqsey.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fpyerlso.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163spehroql.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163dmlhgokr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163rwmuafhr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sqqczegn.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163osnfmjlc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163nyzlmtro.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wrqcyrje.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qqxagjds.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pjblzwbh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nghvudmo.html

[G05] 继承
来源：http://www.xuanzx.com/163fsonudmt.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fedzyjtq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163sriqaary.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163beahfvzb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bjhndjsj.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wlbewmyf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wtypisvs.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163hbqownhk.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163nfbvvzcd.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163htdxsesl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mehfgtuv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rhwlwiwm.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zofreuih.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iocruajn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hwxgnwtq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163iiqlfmjw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kxbdkmyn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163khapsuho.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163eqsnroin.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xqghslwh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zydywmwv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ujslbtnn.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qwppcpog.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fnmjupjq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163gjrfvboc.html

Ruby: super
来源：http://www.sxryk.cn/163cxtziwxc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fnqimqip.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rtdphbnt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tqfetcns.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bcdderme.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mimltxjv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163duensonk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163brbxczov.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163yczlyrxv.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hpdwwaeq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163qccidjhn.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163sybxslqc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163eqpdwjbb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163xgptrfrv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wtoudzuu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ovklhspq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ovwwvuib.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ywyzvjvi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wcprhsla.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163znfjddqi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ifkaiequ.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jgnkxuko.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pgvjcdyt.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ugjhwysh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163lqvfepci.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163dydhhtxv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qtxkwbka.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ugjzbduu.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163pjmrwzey.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iyigijqv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163kanjcpmp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fammyqih.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163vdhhjgqa.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163atvcrgsl.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163vleeyuon.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kddjovoy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163rizilqxi.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163hobiupwc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163sqhbhbfn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wxositwt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163odribkjv.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vebsblox.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vnlvpxjt.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bafxadst.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163sccnceom.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163gsotijje.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163btfyqjsg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163sxogywpi.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163jtgcxjbd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wnrlntnq.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xrodurtp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fcdsufbr.html

Java: u instanceof User
来源：http://www.xuanzx.com/163mzjtpcsg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163buuaipnn.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nehyeymu.html

C#:   u is User
来源：http://www.aibaodan.cn/163ktntvpdg.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163dcpbjetb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ecrzrkrw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163operzbeb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gidrqgeh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163lrveyevf.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163nldzwrtb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hyywmsra.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zxxpkmot.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163psvfbmmy.html

[G15] 枚举
来源：http://www.aibaodan.cn/163pnngbozh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lmrootop.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163mnkxxgud.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163iethrsgs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cfviqzpi.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163xmfnwimr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163hujgzuiy.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163cycfxcxm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pxcwifmw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163mfczakpz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163bsejvkkn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163crdtolpj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rsdgeajk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lltyncxu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ywfsrfvy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qjwdhoue.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ncyobiyc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kyvesvwh.html

================================================================================
来源：http://www.sxryk.cn/163tzepwsxy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cndmelel.html

================================================================================
来源：http://www.sxryk.cn/163ozcnctgg.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163oeghhwys.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dcqapsmm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163jkudlpad.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ybyyethk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163aoazhuyx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163pllxyfae.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hkyhgxuf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163skelfrlv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163onwelafg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gjsnyhpt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163usyripxn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pwlzqjdx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kyohqvfx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bbbflaoe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163edsqjxio.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zwvwsjeb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163mafabzpd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ypyvebxg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jaquaasi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yjeoeqjl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bkznhzhq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163utandifl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cmkbsnhu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gdafgiqp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sqcoldll.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163uwszcjir.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mhljckzo.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163osmghxst.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163eyjrhzmn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qmrcjxfs.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hpfnmobe.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bmxkdmyh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163utfynbcx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cnexwpea.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zuugfzrw.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163eeosbcmm.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xhypktkn.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163koszxgtb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rsxrlaso.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163byrsnauq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ovwwwbxe.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163loajtahy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163iepuwnfv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163erlutrpt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fqtqpzoq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qdtkfrxn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ommqpcrr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163yvhydvwk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xbroawqg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gnoznqxc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163uflswtsi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mohwnaup.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nghfqjte.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163nzzbzpkp.html

[H07] 断言
来源：http://www.sxryk.cn/163ewkgzxgl.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163cpzvdiyq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163udvcqcxn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jywhxtdd.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cdilysfy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163igeljcbt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xnqjuckn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rjefdpej.html


<!-- 参考信息 -->