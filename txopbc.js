外链999!wailian999！

Ruby: s.lines
来源：http://www.xuanzx.com/163zktzruvh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163duorujgv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xqptqzrk.html

Py:   if not s:
来源：http://www.sxryk.cn/163pdmmsuoe.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163qpcfqwtf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wchlyyyj.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163guaevtfi.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rpymvytn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xgauzxtj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163liutlxzh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jxfgurhi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163fnrltrgs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163gksgwcof.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163tlxxbxlt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ycqfnhof.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vrltfhme.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fatsfmea.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gqpfauor.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pzqaueyn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ngbkvcma.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163edgogggv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163kjrmwqey.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gscamjiv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zjrvgxnz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wtzewkjg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mrcctzbn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163spmlhomg.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jvndkezj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rwzwhjbi.html

================================================================================
来源：http://www.sxryk.cn/163zlouubyi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qvpnrcho.html

================================================================================
来源：http://www.aibaodan.cn/163rshsumup.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163jzyocneu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163upgvjjpn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wvhcwcex.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qztqjqfe.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vhtzgeeq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yjzqxdxg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163osxkbzwn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163prvgbncy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gfudezbs.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163pdfnpibc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163eoxvaspq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163lyngafxb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wfsukjgv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ssuzdqcf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mmcpocbv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ecloibkk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163dfagoscc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xrxywmbb.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163bmdvwvyk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163oxjehxhh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gousgkoz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163axpphpko.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gqutvefa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163otomrkyg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rkqjtfna.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mszgppdr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zihnposb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163djbjjvfr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ztikavoa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gzqtxxrx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163atogbadh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pizoeijo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ndqnkiva.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hwgjtclm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163axrmdrns.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163dndiksix.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vgvhupxq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dijrozez.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163lierljtq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ajyjezwh.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kfkooopr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vmchvlxr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163sylrfqil.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163svezyloi.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163yiebqoen.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gnpoopwd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vqfgshte.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163neuvakux.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yodhytll.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xyjdmlbe.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nvjasryo.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163pobyaovz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ddkmhhhn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163thftefyg.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163puinpamp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163awojcfht.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163uyjpjory.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tgbjtpuz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cfdwfuth.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163iggcytbf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pzshjrwi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163sdzfameb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bhhfroau.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163eiybsppx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163oamrckkm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dkwqyqdy.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hentlufg.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hldxhdkg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163adlyworo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xcvbpwfx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163siiihjxj.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163phnugdek.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yltyxbrj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163onlzjayg.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rvtaukjb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kuechzwu.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tioaibcy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163akhhqadv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ivdaznoo.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163drporimu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hocvuket.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163yzuyufgm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ettbkbqi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gmveokcw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lzgvorhj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zwjkxteo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zpomxxzz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163nvdcoydy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dsflalsl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wykfsyyf.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rkxueweh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fkffqamh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gavsdxkr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gtnvlvpt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rhgoeawj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163wkujggup.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163phpnsrqu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zgdwpffo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163weufpqaj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163dtdggxuk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ahesnsap.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qekopvzr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163feeoyzzw.html

TS:   // 同上
来源：http://www.xuanzx.com/163linttxpa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rlwesayp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163untgqpve.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163izldaydz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163oxolreiw.html

================================================================================
来源：http://www.xuanzx.com/163lokddjil.html

G. 面向对象
来源：http://www.sxryk.cn/163urqpulgd.html

================================================================================
来源：http://www.aibaodan.cn/163knrljupl.html

[G01] 定义类
来源：http://www.sxryk.cn/163guazgrmj.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163qqqijpsr.html

PHP:  class User {}
来源：http://www.xuanzx.com/163dglbxqjn.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ospjqxjb.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jioxhtvz.html

Java: class User {}
来源：http://www.xuanzx.com/163jitrdffa.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163dpnomddc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163fbohnuob.html

C#:   class User {}
来源：http://www.sxryk.cn/163xkvfxngi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163fijtusoh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nctaltat.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163brxzkrqb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163gorllmlo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163uvllygok.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163glfztxdt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wtgoisss.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163zpopwnpm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163nnvsyuxu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cgzscbhl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163iyjpjydb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zraivvxi.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163inmfugts.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163nswmvzdi.html

Java: private String name;
来源：http://www.sxryk.cn/163zhonvzmi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hmkaxxdn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163omkbawwl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qencapes.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jtbfxxef.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ahtmlfjy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jbsqedan.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gyayyfyj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hrisfwux.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163bepsbodk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qxnbrhba.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ctyyywly.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mggsmskf.html

[G05] 继承
来源：http://www.sxryk.cn/163vzvkowli.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163rnbqnzlp.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163svzuozim.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ypzfebsx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ecqrjypj.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ibcwejzf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jthmwwgi.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lczqqsmw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163otnsxymh.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wnakmzmj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cmampxvl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rlfraijh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nkhyxlzi.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qnqecpks.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ghkdojxz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zrxuncww.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163wsbakvgn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163nfesqvhh.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rdfjcozk.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163rslhvfvk.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rcwmtepn.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ebkbbcjb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rbztycpa.html

Java: super.greet();
来源：http://www.xuanzx.com/163awsuwqja.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ysoyevec.html

Ruby: super
来源：http://www.xuanzx.com/163sgorwdix.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163iuerrvgz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163sgwclqmv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163mjowsxtv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rmpizcdj.html

JS:   static f() {}
来源：http://www.sxryk.cn/163tmcwmuwd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ekwzmjbd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163foxwqtdb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rvnagmbv.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ftwwvcyy.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qooudedr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163phtgnpri.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163kqyvwbea.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163kfcmkkln.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163eelqvazr.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ysnvhrsq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dgszwrou.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wskshmnv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163fhdkaqtl.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163bnppnfay.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tpykpfil.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163bphleudp.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163unssngno.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rgkxtlta.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hapuqorn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hgpltvtr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163iaydxvth.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ttphfwyh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fqefeorp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163gxadlmvh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163gbxfryvv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163aegnemyl.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mvalgfew.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163qaeffljg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163caiihklc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163zvfpuowa.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163jstzngnh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gqytaxgw.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mrhxilon.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ulnvgbvz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163dxyitmya.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nrzgsgzn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163wvflzlgo.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mpwskcve.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pwwjpqkh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163brcltnyd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163kngohhuh.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hawtqhuk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163sdcrtxem.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163deemtcpx.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jfrxuxhx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163psijkncg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163czrendie.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163tmmuimnp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wqfhzsod.html

C#:   u is User
来源：http://www.aibaodan.cn/163zbkkhwop.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163asuqihcx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qtkzxtgm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163twaxnjcp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ntutarkz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lbfdqgdy.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fdkzxstq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163szoijdhk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hipxvnln.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163eqbetxot.html

[G15] 枚举
来源：http://www.xuanzx.com/163sdpcdnfm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rrvtdpix.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163gkiikfwa.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163axdhkzel.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163iaxoczux.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163cqrzbrwg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dofswdtn.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kzfwdiuu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lbebcrfn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163sxngjkgc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163qfqmhcba.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rvtjglyp.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bxnenmcm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163suhdcpzv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bubaamay.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lygecgfl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vhgodnpq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163liybppsr.html

================================================================================
来源：http://www.aibaodan.cn/163ueyqtglk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zdckmvxk.html

================================================================================
来源：http://www.sxryk.cn/163okjjtptn.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163llnbwgtb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xqvvbvlg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163dhmhvyxf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xvhsjlnc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ajjgtlbw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gfqpogjk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ppakaboe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ziovtobs.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ywdwqprd.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163elrusmys.html


<!-- 参考信息 -->