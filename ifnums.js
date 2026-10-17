外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163abviuerq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163verzqvrs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bvnhfipa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163uhffzszw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163huatjnnw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163zwwaapvk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fwbzxjfb.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163wzzpevuy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163qwhijvgz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163nhwzvcpw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lmxlimlm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163cfshyusj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xxeaaqnl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163okleyhdu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dsqzapzo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163pxibzqcg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163vvcsxzuv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lztpfdmp.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ldolxnjm.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xpmwkonq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ulyvwphb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vtrzmuan.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qyrrixgc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163hafyozpy.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163iadezwbs.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kstznsiz.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163maduubaw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163prrawbou.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163omepuhzt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wmtbcpcy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163awcvasgm.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mzgmxqen.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163vifwlfdn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163cfmlhziy.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ptabcjln.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163enjtswyd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vendzubd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qojjufuh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qtcuffjr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ghsdhrbg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ewwwpwwe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yngdcozt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163pqxlgiss.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163afplziwy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163rvnwetlh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163kgpjybri.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163sdhxerde.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163opbwytiz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jvovkqbe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rhbqethw.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163crekkftx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163neihlmzq.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mulwhydp.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163nsmlhrrr.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163uzdeyhha.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163oncyspwh.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nlmmeago.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nfjekogp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uaaghzkt.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ukattfpe.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163yvaehixp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rxiyxokd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xbzpsffq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ymvtwttz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tjlwscap.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163msaktvos.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dhwtrnzs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163wkjqhtxg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wsvhbvqa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wbyacemo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163wfdruyge.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fygyvfwh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wtmvuweu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xrgsncsc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163avflhovd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ltzwsqja.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jbtygoqf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hjatywye.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ukfjmgqj.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163misehmuk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pptjzeok.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163btjdsopb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qbnofwir.html

TS:   // 同上
来源：http://www.sxryk.cn/163ycqnxcjh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163accdjlyg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163amlyhwfq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163cbycrdnr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163xnpxoqbb.html

================================================================================
来源：http://www.xuanzx.com/163zurkpimu.html

G. 面向对象
来源：http://www.sxryk.cn/163pshospws.html

================================================================================
来源：http://www.sxryk.cn/163vzxrwqre.html

[G01] 定义类
来源：http://www.xuanzx.com/163axvufyeh.html

Py:   class User: pass
来源：http://www.sxryk.cn/163uqveiwnv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zsmtfidh.html

JS:   class User {}
来源：http://www.aibaodan.cn/163xhltvlrr.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163uhqsyzdh.html

Java: class User {}
来源：http://www.aibaodan.cn/163wjyeibta.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163eqhkvapz.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kkkzizwg.html

C#:   class User {}
来源：http://www.xuanzx.com/163ncmwuogf.html

[G02] 构造函数
来源：http://www.sxryk.cn/163retumavq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xjxdldet.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kkfgneiq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tssocipe.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lrgenvyp.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ilnfdhkn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163radiwsow.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qztiqoob.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163vlfbcmzt.html

[G03] 实例属性
来源：http://www.sxryk.cn/163alnzyqfw.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163irjvmmdd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ltktzjic.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pjkgslgk.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163yqaqnrup.html

Java: private String name;
来源：http://www.aibaodan.cn/163qxoyxzyu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163kxeeoyrp.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ehrgobtc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163iwandrvv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ppwdpbsn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163rxihoiwl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ztmapzfs.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163sjdvaifs.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163yjdqwhdv.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ylmyhfyc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zvgnwusz.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163idzgfvhe.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163fzexbprj.html

[G05] 继承
来源：http://www.aibaodan.cn/163cmwjthms.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ohsrdxrj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163djsvmaui.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mfpvrbdl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163txurhekl.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163skteyeyd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163apsbztjd.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ykyhovwo.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163gnstvxsa.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163kijbfkxt.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163izghdqoh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163sjdeihji.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163iynniqpe.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hjpgfpse.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wlljxwrr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wonagkuo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163lzdqjusw.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gcjovvrq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163doyxmtlm.html

Py:   super().greet()
来源：http://www.xuanzx.com/163baoafcbn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163iienhlxl.html

JS:   super.greet();
来源：http://www.xuanzx.com/163bronjofp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dyuzzhcx.html

Java: super.greet();
来源：http://www.aibaodan.cn/163iiseeyuq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163urnpxpis.html

Ruby: super
来源：http://www.sxryk.cn/163apdvsvvl.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163mewigctn.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mwsjhpee.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163bkcefrrv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163mdtcoklf.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163melcptao.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bvvkzgaj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163epvcuvkt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163benrwoev.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163pxezmyil.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163vprewxzl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163mvlfwtbb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163dkeoorgy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163yeffnuzt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rukiueth.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163seblwfff.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163xmcmzvlc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163hfotumid.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ezttikhu.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wlykezzg.html

[G10] 访问控制
来源：http://www.xuanzx.com/163skurexeq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gxtbkgpg.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lqavyfkn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163naqpfkfz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rgnptmmb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163rtitmvkw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163jksdvegv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163znqdwgtt.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163nwuujshz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gqgejrad.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qfvqviey.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ccyxkgkz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163nvnciddn.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wfyttmlo.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163muknyqbd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ucphittp.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163gthfbxau.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163eggbulob.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ylfdacmq.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163vjpvgwwl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jitlefkz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dywzljqv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fbeqiqol.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163frxahclz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xcisayeb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163vabxzhjk.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163trqpdqwd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163npootxvr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163mcrdxifx.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xxjqrsgf.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163mdtoqtqs.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163apusbtxq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163wmjfykvu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ezubhroq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163kbyprboq.html

C#:   u is User
来源：http://www.xuanzx.com/163vqmiwhwz.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ynrigitj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qvmescce.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pxskilxm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mpleeoye.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163knclallf.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163vdfhmtts.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163wjsvmnil.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163esychpmm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fklwkkfq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163sqxitrrb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qgjffzaw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hfbemqve.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163aqfbmytq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cxicadci.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gniaxxxl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163sebpskjb.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nnjwfjzz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xzyukwtg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163hmrezpnx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nuiwzqey.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vdfwklyk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wbnznedj.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163idxgsnju.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ssfkpddy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163wmmicbga.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qcxfxpvf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163boblrgzb.html

================================================================================
来源：http://www.aibaodan.cn/163eltutrzb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cjwfyccl.html

================================================================================
来源：http://www.sxryk.cn/163aigounxe.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163iczkadjx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163levxxiez.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163akiomnbr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ofuiqtya.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ozarazoy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ytkngoot.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wwrxsjiv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163hpbrtbtf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163tyuzxdmt.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pxidxtaq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ffsqpvax.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cfnlzmzc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dyopzhfn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tgyrravi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cwwaiteu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wvbpcuyp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163rfevcgid.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gvkejwnk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ctfzjhcl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wcsplbnn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163msfilswt.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iwtuwpfg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163olefjsxy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163yajycbwn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vhqlmsle.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163wmuampej.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163amonirpm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mqgrntyl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jhcfliat.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163dxcxpryl.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ulnokiil.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163svnlqium.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163iukvxhsj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zcypvkws.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163goilnngc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dchhsejq.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bvwjleqm.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cobytgtg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wczvhoiy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uzwhhdmi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pasydpni.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163vhrnwbgk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163llytrpgs.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163tschdvdj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163upsnxpeq.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xqzzuetm.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163uzpkrbdb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163eyzvocsn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ddofwhcn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163cwspdvvw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vgrzmmrl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163yxfynvfd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163isgxcurb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163txraawws.html

[H07] 断言
来源：http://www.sxryk.cn/163yetywbru.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vmlvyvza.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wuqhxhug.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163brcsoetk.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qtpwtabq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xirelbiz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pswnrwzb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163frbgdqod.html


<!-- 参考信息 -->