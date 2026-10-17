外链999!wailian999！

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163btbbxbhv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163gjzfvnee.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tnvuwejh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wzsvldaa.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xertcsmr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xdbbqsam.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fptzryez.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mixilszs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163lceefnxx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tpgvpyyy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163cbsloszq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gnbjmclv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163njnqldtb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ffixdgrc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163iwppolsj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163hhhumrvp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nqboaoyq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163mdroxzfg.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wqslpktp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163yyqrfwpb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163uvggrsij.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dlrkwrbb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dvyzauzb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163arifprbd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hdjvdfcc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163sedbpcct.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kgzuixfi.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gwpdwxkg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163jywlzayb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163bfwausmf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gncagilq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pumnuhku.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ejlcqbzv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163hxpteyhs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gxuaphay.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163agjohlbp.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163khoibuaq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qncimftm.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163hjzbqtyj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bbazmyjx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sflmleer.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dobbmezr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163fmkbhmgr.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163nxcxorwb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fnbsaqup.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nvfssyek.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163onkjmdbj.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163elsfdmui.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jegcaels.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163czjalbsa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bwdhxlrw.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ybpsdtjg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163qitcuaac.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163mpyjowwq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163oybnwyep.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163rncyjsuq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tgdqytwo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yqqqvire.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zlndkmhk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ykzwwgob.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ecgrbbjd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fmvtrqpu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dhmxsktf.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163daubahxg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dffibfxq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ltmjjizz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wgtvirsg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163svwnnmro.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163poejrosn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dyswjqzq.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163rtieorek.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163mwrfsxdr.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mykdpldh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163udtqpalo.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ewcodvwu.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tlypztpa.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163toswaxnu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dxinypgf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fvvochfj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dpsahhtz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163bqlfimnj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163yxwdmwlu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xdcmvocs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jqftmkwl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oorbdrdk.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tynjuhzl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ixeqpbxo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bzsksvsb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xcnljomb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hdwwopwa.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163webijbpd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jjbyijlf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163nurefahp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dpiluhlf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vkvvjhqk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163yoyxhcma.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lonuxguk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vfhwgqoc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163frqnvlmk.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163pvskbgbf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163iglyxruo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qniiiplw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163onzmmony.html

TS:   // 同上
来源：http://www.sxryk.cn/163fdtvspoy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tlkrgnhi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163keunkhix.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163yqgcmlqs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163beducmdi.html

================================================================================
来源：http://www.aibaodan.cn/163mcxherte.html

G. 面向对象
来源：http://www.aibaodan.cn/163lslxthcp.html

================================================================================
来源：http://www.sxryk.cn/163zddcpmax.html

[G01] 定义类
来源：http://www.aibaodan.cn/163aajhjeih.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ssrodbpe.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hlqsvgxb.html

JS:   class User {}
来源：http://www.sxryk.cn/163raziwvhl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ysyaoehj.html

Java: class User {}
来源：http://www.xuanzx.com/163oooyrcae.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163pjuirrwf.html

Ruby: class User; end
来源：http://www.xuanzx.com/163suqdyzdp.html

C#:   class User {}
来源：http://www.sxryk.cn/163lwxxrizq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jypaiomt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jxtwoixy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163sqsnkjuw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fxjgtgpd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163weqmjcun.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163suhsatpp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xhxmzulk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hueibhva.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163dlsuvtku.html

[G03] 实例属性
来源：http://www.sxryk.cn/163euwrpxnr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lhrowowk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163orkvqpjx.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ffbvoorx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163worgierp.html

Java: private String name;
来源：http://www.xuanzx.com/163yuukywbt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mqrqbjel.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uzsnwcni.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pqydqney.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rpjqmxwd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dshomxeu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xcsvirwz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163jfhhomcw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gbmlajsd.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163eoiuqyib.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163lrwsdjbr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gtctrnns.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zmcsqtfe.html

[G05] 继承
来源：http://www.xuanzx.com/163gafpwrds.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163feojzqkd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ophhpbbf.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wuvgukzx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163menzaddl.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bkyluvum.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163wzyenced.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bwvooich.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kzqretas.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tzqpyeam.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163tdgqqrrg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163esllhzrx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163afvcxbzg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163weamljmi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jnfljkjb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qcoogxcd.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163bfzqfntb.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163yjnidbmg.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163mdxgkdph.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rsbtcqii.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163bjbnqbaa.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163iqeexijx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163bclqpteg.html

Java: super.greet();
来源：http://www.sxryk.cn/163xykarsyb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163gvlijkrh.html

Ruby: super
来源：http://www.sxryk.cn/163ftbpowzi.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163kqvbzzzx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fokaeuin.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163paffymow.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uvbdjdzb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163nukznebc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163chxwlgjf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163njvrmkyy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163kwxukdie.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163apafxauj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163oabyqnpm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mbnykpuw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163zdploihp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wutvynqr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rvmcbavr.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163prvihigr.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163orxhjmxc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qcqpedad.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163sauqdplw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163obtqoqvy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ixtrsivv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gcpoweis.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vpapnmro.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kzqnplpu.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163fqsfyzoq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ltukvvvf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rmuqsdtj.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mgwccemq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hnyzcuba.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163xgxwibkh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163svxcrgqm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xuckjtpx.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zxtxhzmb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163udbcsgqt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163yetqtrhn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gclyeyjw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163jprsmgsc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ahzfyyth.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163wkazvaks.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163psbwjucd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gmvtilyr.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vqjxnsic.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lbzucmxi.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163efrymrbq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hvigthks.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163pdnsemkp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jjfkwfqs.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ktxvbmmx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163vslibeev.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163stfiyrkm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gxsnuohr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ggcldsko.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zxljmmgg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163veicyihx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ggebfwha.html

C#:   u is User
来源：http://www.aibaodan.cn/163mlfsdxgk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163cyaelpwn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163jsvvtnvs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dgkjnjep.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163vfabddmi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163obilqhxy.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163kzfmpmkk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163tsjagvja.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zlitysvn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xlgtottr.html

[G15] 枚举
来源：http://www.sxryk.cn/163qcfypuic.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163cxrepfzg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gvgitfxs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xhcrktzy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yckiqzdj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hxymbxvg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zxbutsff.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163glfvtdnx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bektgskm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qcnrvtdh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163nmdcsrdb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163legzzldr.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xgtspomm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ssaxouow.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163cxkmnjxf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163dmmbnrhy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163torbwoim.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163eksdnnun.html

================================================================================
来源：http://www.aibaodan.cn/163vnsrhakr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qwftykuj.html

================================================================================
来源：http://www.aibaodan.cn/163xaqzimcg.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163etpanpld.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hrhnczcq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163pbisqwog.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gebehvda.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ohskattp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ytopcuuz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163mffeccyy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zjmwgajg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lehwmkyi.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163lrhxxxod.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163inmjrsiw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ysgjqnas.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lpgmogin.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zgeyckwq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nxmokqht.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bjecyacx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jpxdmkvn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163rmnanbpq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163brcggymy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rmsrpick.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aqcgoatw.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fboebkpi.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163utdixtwd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163fnviplwq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163igeroqpj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163eisqoleb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163hpttwawd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wnjgxyru.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163pkwqebss.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163mmbwxoov.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xevmgiau.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kzlixotw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163cxwgvxje.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163rkcmmccp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163itebtand.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163jyuboxhr.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yysnepxn.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xwrqtdaz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163arxfbega.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rrmcuprs.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cipicojw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163iqvtnpnu.html


<!-- 参考信息 -->