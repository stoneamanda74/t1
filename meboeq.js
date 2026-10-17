外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zyzwbtfp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qsromyiv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163iqyncwgf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ieutexth.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lbkaibnj.html

================================================================================
来源：http://www.sxryk.cn/163prmkndir.html

F. 文件与目录
来源：http://www.sxryk.cn/163itujziae.html

================================================================================
来源：http://www.aibaodan.cn/163zzuwmrxk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pelpzuoy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163mnfnylkt.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163toytttih.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163aswyufya.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vpuejwzb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uppsxcyy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163sqfxqawk.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163glvikguy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ywlwghyj.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cpotezmb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xqbzpehl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ujsrtwzi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wlqlkiuw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lqxbzzut.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fvulncps.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163nvvwejbo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163xskjswph.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163iwwlinlr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163omrdozso.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163mliocqlk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qdbbzubf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rvpexixp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zblnedfu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163wfqxuhrf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163iovirgxc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163yreayaph.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ysnqpngr.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163woadkjve.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163qdindwuv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163keyknpyh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163djccxamb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mprlmjse.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qsifiwpo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163biwkiqpi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ioruegeb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wdokxobx.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163nswrpnbg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hlzdvozu.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ktzotauw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163laohclom.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qczmiaqg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dpgjuuni.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qjnsrjiu.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gdhqtnag.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163criaptgw.html

[F06] 删除文件
来源：http://www.sxryk.cn/163enqntmfk.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163arloogjd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163fwdqrlzp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zgqauqzb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163syphmoyn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fsyosuzs.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163uxsyfwgw.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jjwkbmfp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163orakgiqy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163kbdqxdeg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ejunjjmb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163insrhtta.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163foidzljj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hgggorul.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163lrfejith.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rtnjhdbc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163wqkhcqem.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bfanuifm.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163kqxjfxtf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ultpclir.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hlehwmtf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tvqtpqok.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wbymtqlq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rkhezikr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163nnjljxhb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163utuqdeym.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163muvdtprk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163yvkrsmxt.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163hkujiyws.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163kwxjaghu.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mtdvedhv.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gklzypxy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163blacdhlb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163druebmbg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ydxhbxos.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163sdroornm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163unvkaqgz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163okqoqlkk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qudkotqc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ihqzepbq.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163lcutckfi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gempzyhm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163vatohbgc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lhytnvvb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163eqfkfoat.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163rvzsifft.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kbnlglhb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rayxztza.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yeqkkndt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fstxqycr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163volaauze.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ndebqnrb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fxjugmnn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163lmgksfrv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163eulcsqev.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xblcaote.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163dozrtiry.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163pnlfjhet.html

TS:   // 同上
来源：http://www.xuanzx.com/163uszfmuuu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163zeevyyps.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163juppefsj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kenlljpf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163sldotkhs.html

================================================================================
来源：http://www.sxryk.cn/163dapilwki.html

G. 面向对象
来源：http://www.xuanzx.com/163ssexdnqf.html

================================================================================
来源：http://www.xuanzx.com/163bhinioxg.html

[G01] 定义类
来源：http://www.xuanzx.com/163mhbdkulw.html

Py:   class User: pass
来源：http://www.sxryk.cn/163oylcfcun.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jlccidlm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wfeymhtp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xkygzciu.html

Java: class User {}
来源：http://www.aibaodan.cn/163lrdlnnbt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qzvwihjo.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163xlyycktt.html

C#:   class User {}
来源：http://www.xuanzx.com/163eowasuyh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rvejfvmq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163quomvcfw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wsryxhkt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163djopctdi.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rbphhpfp.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163waqnbssa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vqylcybb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ptpmqvxd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163juksruzv.html

[G03] 实例属性
来源：http://www.sxryk.cn/163weruzpsl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zagkwjrk.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fwcdltoh.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ijdmvkjr.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163waoxxjyd.html

Java: private String name;
来源：http://www.xuanzx.com/163avlkosfb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xujyvger.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jeixbrde.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163zylywwuh.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hbjwagqh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yemvekla.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163wmgaltqs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163rcqanxzf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gmcdzsed.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hzlnjoit.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163wdwllupk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163acdowbom.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vtasfgmj.html

[G05] 继承
来源：http://www.sxryk.cn/163sruanpbh.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163mnjxcuhy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ssorisnw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ooviluzq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hkptitro.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wdcdmqou.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163iyftzsas.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tpihtesp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163aghsoggj.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jpsntvqu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163baulwtpc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qqdbpasg.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cpmvwsqv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vuedwthb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163chquthan.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gzsjwufc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163plbxukkn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163cfxuojmv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ifvmevzp.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mentplbl.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vysvafri.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xkwalbdq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163rvllcupk.html

Java: super.greet();
来源：http://www.sxryk.cn/163fbgeodur.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gotkgknz.html

Ruby: super
来源：http://www.sxryk.cn/163kaiemirz.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163rpgfroup.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vbtinkqf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wwdxymrb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vizmwpwg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163mbhvdnoj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bvkinfse.html

Java: static void f() {}
来源：http://www.sxryk.cn/163mguzyifg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163edqjhfxk.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mmeccorp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ifvyddgv.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wglpyuqs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xozmffay.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hsinenaa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dichutjc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nspurggi.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163oemmcspc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jbyecsai.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xpkfgskf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163syjmgdak.html

[G10] 访问控制
来源：http://www.xuanzx.com/163fxtlmfao.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yflkfhnr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nmdtkzjy.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zvzgnndt.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163fizwizik.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163elxzkeqn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ofogedmv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ovegwwgv.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163uqqcvwyl.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ivgqoffe.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163gxpcwiwg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cfmmewkd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jnnowpjp.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sbhgzbiu.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tqpcdzmh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ghqdqejy.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pxnuatsc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ahbxeytp.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mfwzfmow.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ibvevzea.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xbckzyhj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ywkkbqsk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163fznpqynj.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163lnjwkzyt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ldccogwf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163msnlyxnw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ubqqktbi.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163klvizlxt.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163zhefhqyt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163yjlemgqz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ocmhtwrd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kwixkack.html

Java: u instanceof User
来源：http://www.sxryk.cn/163pkdnffja.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fctlkqgb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163msbdxyzl.html

C#:   u is User
来源：http://www.xuanzx.com/163izyctugs.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lfyqsjkg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xgerpdkd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pkrrqkjk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ksobnfac.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bshflpep.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qhbmuthb.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ujcmckij.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163pubrzxqz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163osydvchk.html

[G15] 枚举
来源：http://www.sxryk.cn/163yppxpwzu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hilbebxs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rsfeebxo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vnqeugxb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kwjoewzx.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bxddhtxw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yhihhpbg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vmhztjrb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vbzrnfkh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163bafvowsz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163yhyekntv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qvtjdhry.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163detesdjd.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163koaovyxd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pnuxjtjr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163vathiejh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ratqumag.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163sxqoyiyb.html

================================================================================
来源：http://www.sxryk.cn/163ekakmirw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jclugbyn.html

================================================================================
来源：http://www.aibaodan.cn/163rrmnxnht.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xoooczyp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163cfashtnv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mpbrcitn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163icigirkk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163oiboykoh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ygpvrfgx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ccljlqrx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pcsckimc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qhnorajm.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163isrdhpkd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ufavouhi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gbtrghkv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163egruhdkm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163egyjdwwb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tzcskvwh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dcdzpjbp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163eqtdrysj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vgwyhdov.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zukmyorh.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hulqzdwa.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xoapsitd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lczphkyx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yijuypmq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mcbxtiot.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vzrdzefv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xcwdchou.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163antnemcg.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fkcnivoz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163oufzzhqn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rrbtyrmp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hndipyxv.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kswkwzxc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tgzaxnbw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163bhinnkhg.html


<!-- 参考信息 -->