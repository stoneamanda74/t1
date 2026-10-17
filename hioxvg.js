外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163imfjhfmb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hxporlaw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163isoyscal.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163whqddsmq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wnwoisdf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163nsjwfhek.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163gfayuawr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163boxcdbha.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gzgtyomm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jktvfgvo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163oegltflf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qgxxbrga.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xwfnuzez.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xfyfurco.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ueasketk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163urevacgt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jpaawitb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163noafiarz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163fmwotzcc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163dscjiocy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ctslfkva.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tmfjpgzi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163zelocrfq.html

Py:   if not s:
来源：http://www.sxryk.cn/163cyekmiep.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163yzzhgjgv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ycloheii.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163oksksfam.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qsvyatgk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xjuuhnip.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163fivnkqli.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163abozituz.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hazovuva.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hvzzjrwx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163rpjctdjs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vgqrafnz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163komgtxpw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mwxvzwbd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163dcltsjqn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163xqoonvyz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163sbqrbgas.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qsqfinul.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tdqshrfu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xhfymcji.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hrkntglr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163njisbych.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163egvxqbka.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wdbmcglf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163qyomxdqy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163offtwinf.html

================================================================================
来源：http://www.xuanzx.com/163ljhsozwi.html

F. 文件与目录
来源：http://www.sxryk.cn/163chkpvhtn.html

================================================================================
来源：http://www.aibaodan.cn/163xcjealdy.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163bnbbmsyt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ldvyzred.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lqzcdljf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tfkktmpc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163frpayzey.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rlzjoeda.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jyifbzxb.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bzfbsqil.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cmljcrxq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lzwjcnwt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ktovgxnf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163znedzmbp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bdibmdkz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163tmzkunri.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rxczhapm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163zjwjifcp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163umcieclu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163lpzkmxyv.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163plzztlxc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163omjzcetq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gprgbfsq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mijybgjt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bkrbcnzr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jvpqbzwq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163uruamupr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rgyjhaps.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ufhowqty.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163icqaurzj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163bqgypewe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163dvzkdeei.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bzxbscmf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bktskznk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ibzlgccg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vbhgyhpt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163mkmvmrxw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xscvhdsw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fdabovwk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163djkfeutm.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jlzvvfrb.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nubnsdqb.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vwghyehf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rxuwabau.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qusnmszo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163cyicjaej.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kcjcqxvi.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ceqaayok.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wgzswazw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163pfjszehn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163efribpno.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fqlbsilj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xixtibue.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163exqxzasu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wsceyyyi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163wsfxpfnr.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hiakgvgw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163yaswkvzk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163souxngzg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163brxtvzru.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ivflmcdu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vrzpptwt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ywhahjzv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ihgrpdfg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163fpzsjlww.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gbxnnsaq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163xgxicgog.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163jdrktpsr.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163onkadeip.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yfrnhzqd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vufuhuxm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rvrnqlrs.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163fofvyfba.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163unqqsvax.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jbyeijdm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ughwuhkl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ssifkdun.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vvktkpsv.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rupkdeoz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oyquyrzz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ifagnuwo.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vfzheqca.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dtxxqmli.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163mwtroduc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tpjsjcgi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163boaqhbzy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vinyuqic.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mefvtlls.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ssnkrwul.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163uorekvaz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nhyrholc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163fufcnali.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ttkyfcub.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163grpeyedn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163klyovzob.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qyklpspr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tazktwaf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hjhaywwm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ydwqmsvf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163waahbjwr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163plrwtwye.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xqtgjtae.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hutimdot.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163jtzfbmmf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163tmrbyfxu.html

TS:   // 同上
来源：http://www.sxryk.cn/163pznqhrpt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qzdcjebt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163twlprdwd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163cslliuxt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hfuqbmas.html

================================================================================
来源：http://www.sxryk.cn/163gjpdyqhs.html

G. 面向对象
来源：http://www.sxryk.cn/163qgnldcbr.html

================================================================================
来源：http://www.xuanzx.com/163pmaazncc.html

[G01] 定义类
来源：http://www.sxryk.cn/163dbsmkyxm.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zfavlcro.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dxcxuzoo.html

JS:   class User {}
来源：http://www.xuanzx.com/163wxkoyyja.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163kqncetpb.html

Java: class User {}
来源：http://www.aibaodan.cn/163capnwckm.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163rooelzzp.html

Ruby: class User; end
来源：http://www.xuanzx.com/163tlqdtkmw.html

C#:   class User {}
来源：http://www.sxryk.cn/163syqxsgoz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163btvbnxdm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ctsnjtbt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ovayzzpe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ypbvnnwq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163fmgjbzac.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163prajusti.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hsohewor.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nuhzamym.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163cbwecccc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163guuxztet.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163jgefdisk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163eehdjcdk.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163kgcctemx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wyhdfazv.html

Java: private String name;
来源：http://www.xuanzx.com/163zovtjvlo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163iyqickpe.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163myfgpbuh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xefrttrh.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bcfolttw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163udwvlvsg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vsdtiaye.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163lulzogzq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wbzkgemk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mbbtptpl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mzpgmcmq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xnzusemh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163pjvfnwjy.html

[G05] 继承
来源：http://www.xuanzx.com/163oopizcsr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163jwsnfpql.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vragxgnh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jmtozfwf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rhyqibrf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163nlvwtbyz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xquawuuj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163psaxtdms.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nvenxedr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dfbgttio.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163yjoywjwo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fyigtjps.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gkrvtcpg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wrnnbonb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163gvhyjgfp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mbnlkazo.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163urkjinha.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fqgqlcap.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163kdfmfgrg.html

Py:   super().greet()
来源：http://www.xuanzx.com/163icwzlsyo.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163zytrrqyn.html

JS:   super.greet();
来源：http://www.xuanzx.com/163roosqdxf.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ssyfahst.html

Java: super.greet();
来源：http://www.xuanzx.com/163ggzmicqi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tjumomys.html

Ruby: super
来源：http://www.aibaodan.cn/163fhwzcvaz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163mjiqdast.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163mlkaouog.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ddqnyvku.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163cztxhaiw.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mnudlpfi.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163dbtltwfe.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dunmkqhk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163wymvbccv.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fciuqrom.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163daifxagr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163nwlkpihs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163narsvowo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163khhokqxh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163aeshfook.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163iktwivqi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hgtnjrfn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163sxwlpodd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ybpqszqt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163alsoeqxj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163iryejbcu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nmcpwvkd.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xmcriele.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163lcuwosyq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ophcwcds.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163gbylkxmb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bluvmimf.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163wepqoqls.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163pkcprovp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163utunylqq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xeetzdye.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kchnrtba.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163aglctfsl.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163fumompxv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cnfaqmrs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163iaifdjzq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163iwwlkree.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163pnytvwci.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163bldsfosh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163arjsmehb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ootoakvn.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163tkbhtpzk.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kgtpvhjq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163atvieqfp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ubhgcflx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163bgofatab.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163mczjjmtq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qbwwdncg.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163hemrpvss.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lpbnuyic.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pudimrzp.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rssczuur.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wfnbttrt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ulnccqps.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wxhyprni.html

C#:   u is User
来源：http://www.sxryk.cn/163uzuoijux.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wkxxckhf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xbzjhrdd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163esgfcovc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163zfenpkco.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163jjkjweqd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hcxyqqbi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163yxqkoddl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qnymksjh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sgoipjwr.html

[G15] 枚举
来源：http://www.sxryk.cn/163amooxpkl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163muthcgiq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vessewjt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163tzargbzp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jjpcjrxf.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lzzwlnfa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gyazikoj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163homwfkep.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163paowpkxm.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eqcbkcrl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rrisbuoe.html


<!-- 参考信息 -->