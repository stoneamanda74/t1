外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ewzcbhnu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ohxyvnhd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mzwmrfbn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xbogwiye.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ymwoigvr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ovuzsffa.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163yaxvldki.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rvyuyijj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163knlaxtcl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163brqotpaf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fcyxzeni.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ljtwusfi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bamgbyoz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163drgjyrkb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ocwcspjy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nmgpzwdb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163plktxerl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bqxrjqvt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163npxfdlhq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oelnaptw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vdbhsbem.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lgnmcudd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163cdwcmwvp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163uhajahhe.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wwxcdqjm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zlycpcom.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ynuheqhd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hajhhszk.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rqbnlljr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pvlpypft.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vnurnhyv.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163brdyqdrd.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xpkurxqt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pyrqlbjh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cituoaep.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163twfcxfib.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vrtlpyto.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dsspacko.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mrdircbr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163lemziuvk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hhynbzbm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zxularfu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163jztdbfek.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zxrfymqp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163mgqmbnad.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fwuajesn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fhlolnyb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163kskbxznp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ssoqudxx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zcbcbodx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163osgaziim.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163fvrrbkie.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vlwyfomv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163evnnkflp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gbxodtpx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wjnbterl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vrttzgmf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jngbibep.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163otwnwthq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163tuwerggl.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163sjnpqurx.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ihwlntyd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163fjmwcjpv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kuhqmxgz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163btvetvya.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dkikzltq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163djdtrray.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163sdvyjwdz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fqpsfyze.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hgkumnum.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zaflnflg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163xxremxdc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hqslhssr.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gohehzus.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bhpasztx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163djmszlnb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qozcelaa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163alcxpnaj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ozszdlzf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163goyfbgvz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ndexoequ.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zizpgwjm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163upjdqxfa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tbfnraly.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163izdspnat.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163erzxcuro.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163cvyxdirz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vtqtvfkh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gqsggeuk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163wpixprgy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163alaaiyxe.html

TS:   // 同上
来源：http://www.sxryk.cn/163fjgekjoe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163gkipvjvf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ccpnstoo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wupglvjk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163tvutnrkb.html

================================================================================
来源：http://www.aibaodan.cn/163bvygohnq.html

G. 面向对象
来源：http://www.sxryk.cn/163ulnabcmz.html

================================================================================
来源：http://www.xuanzx.com/163yqoyamfv.html

[G01] 定义类
来源：http://www.sxryk.cn/163flfvwjdx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cagzprkt.html

PHP:  class User {}
来源：http://www.sxryk.cn/163idnlemsc.html

JS:   class User {}
来源：http://www.aibaodan.cn/163byxftkdk.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163igzbplqm.html

Java: class User {}
来源：http://www.sxryk.cn/163phsmwcgn.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163octmgzax.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ksaxyjcg.html

C#:   class User {}
来源：http://www.xuanzx.com/163svyrmkxq.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yoborayj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163khomagrv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hvthsumq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163svxoukfh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xpbufkse.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wthpvlrq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mlrsxahg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fzutctxe.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163tldtirja.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ztkbkxro.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nfksihtk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163klowhgvb.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163feoyxsia.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163sjsqjwod.html

Java: private String name;
来源：http://www.xuanzx.com/163arunkgld.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hmawohuh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hxdntowq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ompidcqr.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tzpqscsc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163inwxpncw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163iuyjfamj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163oggxcsjs.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wervnnhy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zpzlqekf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xxdwhlir.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163eepqleef.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163lokmvoow.html

[G05] 继承
来源：http://www.sxryk.cn/163zpybqrrr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163dsbsltfj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163pbmzctfk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ukhmayok.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cqfjivzs.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mvwgnkcb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jedorviw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ixishzqr.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rfsbqoab.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tkuinfha.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163sovewjhq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163httyvrll.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163koryzxvz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163omvdkcyo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qpnelizp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163skweagwg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163prcfzqkl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163iineoypp.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ifylmmyg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163esdilydl.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163omdikjqj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fgycybqv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dngfqpbh.html

Java: super.greet();
来源：http://www.xuanzx.com/163qazooeil.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tgwwtpzv.html

Ruby: super
来源：http://www.aibaodan.cn/163psphntbu.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163tgxcfoku.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jeqrtjaa.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163mdaoozmb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163fewwcuos.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163absmrofj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ifnrguyx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163odwqjddd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tceaggyw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gvmodtqz.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nixwbrfq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qppvxnvk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ersydcuh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163xwytkjqm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163lsbpiuhg.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163zfnhncna.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163aoltqswv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163qcxmklgk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tzboyrlf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163blzjvcom.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ikwifzci.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lefbvcde.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nyficsbi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ptsmmjgg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163hnieobvf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vzflvvpf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hmioxuqt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163faeeypux.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163dalequdm.html

[G11] getter / setter
来源：http://www.xuanzx.com/163rzzkgqwh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163iiollmfo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ybewgxag.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zsfzcazq.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xoccgrlr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163douthhyb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163prfevihm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zbesuynb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163uwlctnvp.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kvlqyvrt.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163fihkpsgy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ekbvrtis.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163lzountco.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163yhhhzegr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ldjqlpds.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163mywxsbpi.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163aenejtwc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wylhfteb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163sscnfdlf.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ddefuxzy.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ymazqkjq.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163otqtnvzt.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163khwunvep.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qqqdpyjv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kbzmdors.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163tdkmpabe.html

C#:   u is User
来源：http://www.sxryk.cn/163wtogklpl.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163taybgoke.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163gxrinxmu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pvbdasgo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hkpynjqd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rcbbbxuh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tatcvevr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163uwnjsinr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163wbpzxtik.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ozvngmga.html

[G15] 枚举
来源：http://www.xuanzx.com/163jyjhtgnx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bkplxkco.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163nhhvbpgy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kitrjdqn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qovtsclw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163wkpreaxb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163inwfngcp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xwwfpqvy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pilvannx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ycjnxbkb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ykfratru.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ccstvypa.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lbdwlvhi.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tcqxljgh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163lrmgvuvl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gioiwafl.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163tyzqxwtn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163itbtgvwy.html

================================================================================
来源：http://www.sxryk.cn/163kvtohebx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163uewwqlak.html

================================================================================
来源：http://www.sxryk.cn/163sftoclvy.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ggtxmevc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163mmqxjawk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ttkwlmec.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tqbjafye.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vgdavyds.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xsnlgnnk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gsxysxbv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gvitxztd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fdsfyxxp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163yuwimmec.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ajeynwiz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wqpymvxi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dwjdytxy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bqboesls.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mrzezwyk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163aovxqswx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rybdflwt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fjstasur.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163dipjlrio.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zairgmee.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163brnpsnuc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iteweyky.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jeupesqn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163zamxrllg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163oktkurvq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ztbalxwg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163siokrvaz.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ntoeyvpu.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163wmbbxoqd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ayijblpm.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iskroqpe.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163krjgvimb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163cngbybxh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tlcsddgm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163pysuoqcy.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tdhpammh.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jmqhgwwo.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qviykaxu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163dyofbyze.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163epkhvhct.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vasjscej.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163uktvzysf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163srjrwmee.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163krqonyzf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zdzurfux.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ukfdhhob.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163nnaiykfo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ykgcltgw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163izovctvi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lzasqyyu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163plofwayq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rozvcbhe.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tnakwaet.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163dhohhcbd.html


<!-- 参考信息 -->