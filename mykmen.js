外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kvrplyjd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163oohafxjo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qoarzola.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163illtrnfk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163godbywsm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163altyquce.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163voffnhml.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rkbqrkmx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163oobtleyn.html

================================================================================
来源：http://www.sxryk.cn/163aigfsnaj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tgkinnho.html

================================================================================
来源：http://www.xuanzx.com/163piiduiwm.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nkohltag.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zgnyjhhi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ugmxlxnr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xyynusaf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wnwaebxv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wmpupouj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hbaawrda.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163timymftr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gaanekox.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vvtfowbt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cdluptho.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mdnfobqm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qrbyrgev.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gwqrxpqo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gavaptjl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163prsndcwr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lmfbiqjw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163plqiayaj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lqhbpoqq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fmuzkhud.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163tsfqlbxj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hsxmdqgp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dwscfsev.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163atqtxrsq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pltpiaha.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163djtmibnb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ezgpyjfs.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ndkpfgod.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xjwbajzt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ommflagx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tkkzmube.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163khsqthcb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163irkgcwqu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163wfqqgiwe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163nxeaxaes.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ccpgbdla.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163oqidepot.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mjllcnka.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hyxhwzah.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163akvrtjso.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bafazvsr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163comcquer.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rbsnenbb.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163niwodmft.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jwxghlxe.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dosdkrhu.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163omqmytjc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qnzkblpb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163noatgjdc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yehqkomq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oetfpwrp.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bfzegwgv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163csuyjhyg.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163mjyxmmha.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fstqsiix.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mlqouzpo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163wzgqsuhq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rwuxirxb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163upkzkdsg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bvpwkwrz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ijfxefnv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163fpneppiz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163sohopvmg.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vmerqpiv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163rhwpmfpg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fitgxlbm.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hiolhjtj.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tdttzjny.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kxaaqycv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163bncrllou.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kanhjfto.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163rsamkopl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163uxmlmeqr.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rxzvtupm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ibypkxpp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gojzaocf.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xlnecbjw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uknequhq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tdvkwuya.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jqhzpbcm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163dnbsxjjc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163badfpdmh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163owcmezys.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lujfjkdj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ajqwknbz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163faaouptf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163lavaqtge.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cdnwufat.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ejwtzzjt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163mjgjdybx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163gpdwidnt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zjwytmbu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ikapupfz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xoskrqzp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ukarbmiw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mjjinaqx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163apqrhplj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jnjphugx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163kbqtglzp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163qqbyoafk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163niwtldkc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163iocmstts.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nzfsuofi.html

TS:   // 同上
来源：http://www.sxryk.cn/163nvcjwona.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hwurhitm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163hzutwnqa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163zmhvvnyg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mcjsgxjc.html

================================================================================
来源：http://www.xuanzx.com/163aozswrhc.html

G. 面向对象
来源：http://www.sxryk.cn/163wbkcpfpd.html

================================================================================
来源：http://www.xuanzx.com/163mnfyklpc.html

[G01] 定义类
来源：http://www.sxryk.cn/163mwincylj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ambkwhmm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163careylyz.html

JS:   class User {}
来源：http://www.xuanzx.com/163bgocjaoh.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163immfjfof.html

Java: class User {}
来源：http://www.xuanzx.com/163nxepkxvt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ehqfvpkq.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163cgovqkyh.html

C#:   class User {}
来源：http://www.sxryk.cn/163pbkcqija.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163thswnodi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fioetgch.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zvoatazv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xgkcglso.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163omvomnee.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163bclpvulz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fcdgajll.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lgdstecd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ymehywdi.html

[G03] 实例属性
来源：http://www.sxryk.cn/163swyxvhmt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163daaxrjkt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163lkrjlthw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163fmtjlhcy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163uijpkulb.html

Java: private String name;
来源：http://www.xuanzx.com/163dbakuqnr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163uxbjkrec.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163iysbtunn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tgzosivt.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ereipdqr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163byejkgoi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hqsurtir.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163tfuuyvzi.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163zsmhjyef.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163sdydaqcs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163iaymqych.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vvmlhfxt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163yegbbwrd.html

[G05] 继承
来源：http://www.sxryk.cn/163gvgxunep.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163znsmpcne.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163fntokple.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ssptwuif.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dbaxziun.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fgnaoiry.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rcyfcquv.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163uixglvgc.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163daqpzgan.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163nqcgioey.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rwwyeziu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hxshyapn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wgkqqfqe.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163enxsfdkm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163fgdtltoj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yqevxanb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hvpliapi.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163twgweiql.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163tefwtmdp.html

Py:   super().greet()
来源：http://www.sxryk.cn/163irsfcqrw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vecyqwkl.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vuzdvbuv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163uwhcniij.html

Java: super.greet();
来源：http://www.xuanzx.com/163qzbmizva.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vheffwjt.html

Ruby: super
来源：http://www.sxryk.cn/163stckghiu.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163gwlfayiu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163npjhodfk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vavsyeix.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163dlhitutc.html

JS:   static f() {}
来源：http://www.sxryk.cn/163loiymqsr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tywhefps.html

Java: static void f() {}
来源：http://www.xuanzx.com/163bsgodunp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163acrbejpr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rpekbifw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163olgukowr.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nzjsgqxs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163cavocdtr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163riufwdai.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163kaainnfn.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163lfypgpmd.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163piedrkqa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163oprwhvyg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vxlvhslk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163yttbgpjf.html

[G10] 访问控制
来源：http://www.sxryk.cn/163acbtmuef.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163lvykbfzq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xlgailnd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163cesertgn.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rmvaighi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gfauilol.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zvrakfzn.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nfjmnbdq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ttpdfjvc.html

[G11] getter / setter
来源：http://www.xuanzx.com/163atcblflv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163unaltavl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dnaloqmz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mijdnklw.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vvzwryby.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163miguuytg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163jcbtarpd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ytxmvkbu.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ulyfsbjm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163smkktoda.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pturzuxw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163kmjkahak.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163itttwlvg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hxkhsxay.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163tnooqglx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163glfchpaw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xzochwol.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ehkwqhrv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xbqivwrc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vctnmsed.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ktwstbcd.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ppwrwhon.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ffllukke.html

Java: u instanceof User
来源：http://www.sxryk.cn/163myrtbrwj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rueyxgfs.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jasymdkv.html

C#:   u is User
来源：http://www.xuanzx.com/163tlwuelou.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163amibhzpg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rupjfaun.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ompbikob.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lztscxck.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qfbwsgbm.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163deepqkel.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ihkqfhol.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vufbpero.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163quvbuvfj.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xqxhisio.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bcthidgx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gtlhtgud.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ldvdidqe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nfxxbjpy.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163nrtrtmfb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163quiovigh.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163olbqnham.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rddnnqbo.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163uujtwcqa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163tuvvobqt.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163tfoxfwgd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wrenitql.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163grnohxdh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vaazpndn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163npawuxro.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vxgyvwpr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163pbmfcqfa.html

================================================================================
来源：http://www.sxryk.cn/163edabhvqv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163mcbacgcw.html

================================================================================
来源：http://www.sxryk.cn/163ahiofnss.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163idpilxcs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163apiofhle.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nptakzmz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163utmtkmkg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dafejmka.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163nwvadgjj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wlrwejws.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163iahutksn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163usaobcuy.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163azchdkop.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ebnxrgqk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163elifigjx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163umeumdzo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hfqnzjsq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oacjbrne.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wlnwsxuz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zemokxrs.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bkpmjlwr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163xoljdtnr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hlgmbmab.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163arpeosfj.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yocmnwdh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xldqwtmv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163digwnell.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ctzjnjvg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163sgvheppy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lfbymekd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163dtrathnu.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ldqvrilk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163kdnriecj.html


<!-- 参考信息 -->