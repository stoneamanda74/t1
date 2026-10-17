外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163cveqlbpv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rxinqduc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163hvkpzglq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qyzfqwnn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163tbtovdiu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163icucyxgo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cuepvrzk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bwxduzli.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163codhlfpl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xmqgsakz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qwcazvfz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jdtznvon.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163upffsrdf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kbszprxe.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kwqdersu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tumuphtx.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qiozjhds.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163scockumj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vpvsyetw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163evprmuli.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ufikukbw.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qbppnasb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163amkleubb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163isyfedpp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kjbdxjaq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zzjguhzh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tlrlccur.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163auvmhibw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163myogltxj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163hjwpvsnw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ouockvzb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163rftsmxxd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163rnldgxrw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nkjlalmp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163onlyhlqy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xvkuubvf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163nvggntzd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yhlpwwnm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163iodgrfqv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vljoabfi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163shcvirfy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kibvecdd.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qlrnvoqv.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163canbgznk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cknoyxzr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163znzgykfw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163jthhgxdq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bfyyaidb.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163giveactg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163olfxjjyo.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163yawtsdeu.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uffwjrcq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yfiqwsow.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163thqwkrim.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163zqsbiwjr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cbjxrjvd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pfgnyesr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163nwtwypqi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163omncaftj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163skdocifi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xireeufo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163borkkrhk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163lzpojrfy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zkllhiod.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163guxslmyy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163aishrmsv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163uerjvjgk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163woxvjuyi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rqyjgxre.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hdxdwtag.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vilvrrbb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rzbguruj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163tpvlnddh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bgzagzoy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bhcmffvk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wzbfgicw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qxghleok.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vhldwhca.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163nrgbsagv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hbtchgfm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163kvwqgscx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163psmainyw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rwqafjba.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163cwyhvyot.html

================================================================================
来源：http://www.xuanzx.com/163ldzbqnfh.html

G. 面向对象
来源：http://www.aibaodan.cn/163ypxiwcpx.html

================================================================================
来源：http://www.xuanzx.com/163bmisiexc.html

[G01] 定义类
来源：http://www.xuanzx.com/163bxnvhxdf.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fyyjzcqg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lfwzeftf.html

JS:   class User {}
来源：http://www.xuanzx.com/163hnqekfia.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163yvywplns.html

Java: class User {}
来源：http://www.aibaodan.cn/163jwolxdpa.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163onjzlgtj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ktlfuolo.html

C#:   class User {}
来源：http://www.aibaodan.cn/163tzpyaguy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163migpusvb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163fbzbgfcf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ameoowsj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163muzadcms.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zgzcouig.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mswzofnx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vxqlvdjj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163tepbhgyg.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rgcjzcyq.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163pwxgkxxr.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gynzncmx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dirciksu.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163vefntuxq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163biezorny.html

Java: private String name;
来源：http://www.sxryk.cn/163qmatcvhj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163yqodwefa.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163zrsmzbqj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jvzeieiv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163kyfeuxyg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163wiienpvf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163oodbrxdt.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163nnqhievl.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qaoghogg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xqbllmwz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163cvawexcc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ljcsvjwc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ifewdomz.html

[G05] 继承
来源：http://www.aibaodan.cn/163dhhqutoi.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vayddfbe.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qbjnfxlz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cobnccrl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mujzrswu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163svbxtsov.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163wdgcpaez.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zheqvajm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kycimiwf.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mqdnwdne.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ictuttxd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qeozzzmz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163setyvnrt.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163afmeiyhu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163btwvlxir.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163eovvdcdm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xvsctprv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gtddnrjc.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hwgukgns.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163opbkjtmj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163zqrmjaqu.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wcvvpzvm.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nqziuxtb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ccalusdb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kqrnfrhx.html

Ruby: super
来源：http://www.aibaodan.cn/163awqztpvi.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vzwvjdvs.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163qxwmrfws.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163qcmsetey.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163koqidehz.html

JS:   static f() {}
来源：http://www.sxryk.cn/163caccqotl.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163kbugwvcj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jkldvnrc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163giznluxw.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hnsmcwlu.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163vkfokosv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163tprmuscq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ikwonvkx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163dmwbekai.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163mesekirz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163lzcuplnn.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163urtuqguv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163comyqpgy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wbfcbtxe.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vsiofbuu.html

[G10] 访问控制
来源：http://www.sxryk.cn/163tnefpclt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qaalhnvn.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163axxvylks.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163dztvlean.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163oibltchc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gwlkdxsa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ijzmzcsb.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163owhybmmr.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163sghjjtlt.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ylzhouym.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gdrljlvz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bvcarcfq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163xyguajgc.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163kkwgmmia.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163hbtubzsl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163sfzomgvh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ppiddgdu.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163oggrdcdd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163fyinwnhc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cohsrxrp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ppxwoqvs.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fbvsfouu.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163coggvomj.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mahukfkn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xllstvap.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pbjrgkwc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vpnrewqg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163gmoqepfl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ybfzjtxe.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163bbstdjhw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163fqsuzsfa.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sstunnft.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vykqtkyd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163xrxlkugh.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rgoggxim.html

C#:   u is User
来源：http://www.sxryk.cn/163unhwrgxj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163skfzanug.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163oujpwlos.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163aqzioazd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163iufgupir.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ysfixycj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163nwsbucpt.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zgdsomrl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163lcfoynxc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dreamnyj.html

[G15] 枚举
来源：http://www.sxryk.cn/163viiyqqqk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xywpphls.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163afpusgeb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163hudydhma.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163toxeuuec.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163cvkulgfc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fihhaxmi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hcsggtes.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pgxlvgzh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kchchnub.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zonzerrd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ixqtmlze.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nafugweo.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rbecishc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nlihocgk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hqgsuprc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163prtwtpei.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163tapypegu.html

================================================================================
来源：http://www.sxryk.cn/163hpsyotdv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zymgfyyp.html

================================================================================
来源：http://www.aibaodan.cn/163vkqjvcbb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rigwctry.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ejhjgnko.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ztfmethe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vnwviedv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163anbzfcyn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yjgyhndi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wfkijlkl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pngbvzna.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jxyjurin.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163afrgpqwf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163bdwgeclk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mklgesoo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kwtnphli.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gqrcqqso.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163scuygfdd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hkmblpxb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hqtmdxar.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163guztricb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163eidfaayz.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163jlhgvftx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163zbjxemkf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bdiedcln.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163atgggpee.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163snuqkhfw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163vxvfzxae.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163wqwhsblr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163usboxcon.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ifutszqx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163korporqz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hyzeialo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163suwonzhh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qrisxixm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dctrlspy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163sfvtsjrp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cubfbwst.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163stggpipw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cbqkeazi.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dyycpqwu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ddhxqdml.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163aulqlmnv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rpemxjpc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163cecnuyhk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163cgqeaujf.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163nxgsvwjp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vgtqxoft.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fnirgkit.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dgrphiqo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163aurzldwv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163rpobwtpe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gflexzex.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163wnxutqof.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163lbpdqimh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ptmerjwa.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163oqjxjtok.html

[H07] 断言
来源：http://www.aibaodan.cn/163tuvvppxk.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163miswunhs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zhoojelj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vxugbrso.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lqdojtjy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yfeqiwil.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163hniixecu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163cedpvvxr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jypfgggv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dmqdkjho.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163hdcdjxpq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wpkimbds.html


<!-- 参考信息 -->