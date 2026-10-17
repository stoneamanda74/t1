外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xhhusmhp.html

================================================================================
来源：http://www.xuanzx.com/163toimflpu.html

F. 文件与目录
来源：http://www.sxryk.cn/163sgwznwat.html

================================================================================
来源：http://www.xuanzx.com/163iqbdjcgt.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zexzbmxx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rpnhkqwg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163igktshqg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mxybkhuq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wrxnofzx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wgotyqkn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qxjqjytc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wazetiuu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kmdkxhte.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pxumrdkx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jmxaqktd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163uuaoftrh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163msveezcm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jnozxryd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qqovqfri.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ammtkels.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vrbpiceu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sxcskbbo.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gwvihgkl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163powfgrzq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163wnvstdza.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zbufbxbe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163svnyrerl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163nfsoqfjq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hnciyoeh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163tasxbdmy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163krwpcvmp.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cswchuqw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163nebiytpr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ujbzoijo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gdmdcrqm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ttoxgcid.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163nwzswvrk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bgzwwbrr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163cacznjcj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163swliijlr.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163luhxssyj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163dufkcfvo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qaekxrob.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vwfurksn.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cwoyvclh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rgwbplie.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kfnfdpvn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163utaxgwec.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163zyldjeaa.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rcpinsrq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vdrrxbbo.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163zacdqqov.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jbkeomio.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jfbussit.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mfogqdfq.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163xlytimhq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rvauihzd.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dsnotmuw.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163cniwgcfo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dfrcphgr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163gkpmiofa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163moqrfotg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jrxoxrgy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bbwudssz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163emcvuorx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dnfnckza.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nsoktsyw.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163wqixymjo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163yzjsqaxw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163oknnawuy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zamzhixz.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tzmjvuql.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sjtyesrv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bhlxszmv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163wlnjqvst.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dmuhexxz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163agapsvdl.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163nqeobvkf.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jhcliwtq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163owbhoyrq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xvfrirwv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163umzjiabd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mxhrrpap.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tmgxtylh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ovwoepmk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163axyhypgl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cvwemwmy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163dktlgxuc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163frurjuqv.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163uwuwacbl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163jfvgcdda.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kjyblida.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tliiwztq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163xclbtyhd.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bcakcgfu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uyylybop.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rpeodghf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zsyolrms.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163snntclsx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163wcfidvqw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gzcfopqg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163asypxlpw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163umuoabbg.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163wtlynyzw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zkyfiifm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163gvrpmsdj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163yatisipd.html

TS:   // 同上
来源：http://www.xuanzx.com/163oyyndafv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163gssbjfhu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163nmmgtxvv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163msqysdmg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163axfhlgwi.html

================================================================================
来源：http://www.sxryk.cn/163vbfkgbaz.html

G. 面向对象
来源：http://www.sxryk.cn/163sqzybpku.html

================================================================================
来源：http://www.xuanzx.com/163qimpdoli.html

[G01] 定义类
来源：http://www.aibaodan.cn/163hqfaigyg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163tqlgchdn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fmzdkpas.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fdvhnajc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163mhizspcu.html

Java: class User {}
来源：http://www.sxryk.cn/163ictrrpte.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163udwqydjm.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xwtugtnq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163tpntkjdq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163gmuvlekv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vqzpkupn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ulvhfzjz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rpnxznqo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163frckhlwh.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163yuqiwvmm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bgfvhvzo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163rolukjag.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163eimzszzz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163bswmqwpl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163xozdeizz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163dpxjnbvj.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zmlmsrfz.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163cnsvhptl.html

Java: private String name;
来源：http://www.aibaodan.cn/163fofljxlk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163aubrpjba.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vtlkgikj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ielqsvje.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vmthklqz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bckhagez.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163urfhcfhb.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ecmwbvha.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163tdsqwxsg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163fsmntowg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ifxbeiwq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gxxfbpmu.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163iomduyws.html

[G05] 继承
来源：http://www.sxryk.cn/163erqgpxnc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ihbmorgi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bqqdmehy.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kgkssokm.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gzxusfjb.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gdxyksli.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ckjlgnsi.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163tjtfunis.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163evnnpxbl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ypgmiqrl.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xykhlatc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ukokmdkd.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fycgpvgi.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qjohmrju.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ywhottun.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ieuqsvig.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mcjrietp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163lgyxeufo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163inwivkif.html

Py:   super().greet()
来源：http://www.sxryk.cn/163uwyndvgu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163lgtjhyre.html

JS:   super.greet();
来源：http://www.xuanzx.com/163eertxaut.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163gpdrvwty.html

Java: super.greet();
来源：http://www.aibaodan.cn/163pdyyrclg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163frvzugnk.html

Ruby: super
来源：http://www.xuanzx.com/163losunbrh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ifidyzmf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163chbibzot.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tkgwuvtd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163pvltbfbv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163czrmeqvk.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163katyzire.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kczrrujt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163kamepcgd.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163bnxxkhzb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nlhdiljd.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163qivadqgb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mbpgcnsf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163cuakxunv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ncivvibc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fsxyqcmo.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dekfhawd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163edsxjmhg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zetxspqy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163wclcioju.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ozrlgwzm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xodqqshh.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163fysxwwly.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mwjeeaee.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163wypumkdi.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163tuesiiym.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bjmbzjea.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163xhwvducq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163iquvvsjs.html

[G11] getter / setter
来源：http://www.xuanzx.com/163hhrspicf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163matdpqtj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vtgpwdms.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163sbvcwcne.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163deciwpyo.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ibppmynj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mjzswsux.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lodsaylc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wiaubcya.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163dyrreojt.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163arspzcnf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jzofgyzg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cqrqtugk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163fjqsiezy.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163iwwrigwy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gtsrdztg.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ljmttymt.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pxjjvhvk.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kqurvmlv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163mzvnespb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qdsqiyxe.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xldynfar.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163itlydawk.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163qygwrxtd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163amxcjdlb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xsqtjcce.html

C#:   u is User
来源：http://www.sxryk.cn/163zvunqofd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163rbrzixfi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163komuaelb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163bigfbgtk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163pvpijoxu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163fjavyfib.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jjfqtccg.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wghzadqa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jbgrgrts.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163oefvmqcj.html

[G15] 枚举
来源：http://www.xuanzx.com/163wopopnvo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163trjqamgh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bbuswrjs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163fcpqzslh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163roaohesz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rvdaykci.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163orbcqzri.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163qhigbhcl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163oykunmgu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ajismnmj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163lfndbbym.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zqcakfjr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vnvvlzhu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163deduewqh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ijjrynjv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gofmuied.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163svexreco.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hwddieog.html

================================================================================
来源：http://www.sxryk.cn/163cyykxpfr.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dxuoabha.html

================================================================================
来源：http://www.xuanzx.com/163itxffpil.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163lajtucsc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vhpicvaz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vypftiqa.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ufeawpdc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163slqqazpo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163npklgovz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163elifyvwe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fmerahou.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163jrgnpcnb.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hmfqkvcq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jkcphivq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lksxzdok.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gfnpmxhx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rpnrjihj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vgxgxewh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rgczixyn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163kowqfzox.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163htqrawmx.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rgtrjwjo.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dsqoevsg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163hmatdgcc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bsgczjxm.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wpptafvm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163fmtzigfy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163hpcxnepf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ddtnuurm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jgiwpksm.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163pdcvxoks.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ylndbdqo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lvutpbub.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yomzwtvt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ushzhvam.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163asgksaey.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163kidmqpyp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163itnvvczg.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qztobejw.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163abhwbqoe.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163aeygyszn.html


<!-- 参考信息 -->