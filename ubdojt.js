外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163nvumvrbm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jjfptluu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vcdrulet.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qrohhjkd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dicctyku.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163vmmjmwda.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vxsiqxnz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163rhijktcu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163aexzhibe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163zhnllevv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jnmlbeyp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sflaabhe.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163nywqstrm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tjfmrdzi.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163zyprpnzb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bhdzogsx.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163mqlknxud.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qmvklmjr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gnayueiv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163azbioqby.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dvizciov.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163teumobxe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163lrjtmzyv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163nvdzygvu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163nadvtqei.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163nwbsnnuq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163juzzsxgp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bmqljvfg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zrdcdatw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zhifdenk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163whuexies.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163eirgoaio.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vokrevvj.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ewzzpteh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zsghgcyf.html

Py:   if not s:
来源：http://www.xuanzx.com/163pibxrscp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bguzcadj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qxyidyau.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163phsoseds.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kpntjurt.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163fmergbva.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163yxmboddk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163egenaqbz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163urzjfwvk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163xufzjbfj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163otggffyq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cetksoqt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hmzqtsuy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vqnbtwkc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bgutuehf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dbkunsbk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wedobrqw.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163pjgrlifo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163cwumqhka.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163muadnnge.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163puuphgcj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ojeejhzp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ffjtvlwt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163fdbgrmdd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gcraaruq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163tipfgzna.html

================================================================================
来源：http://www.sxryk.cn/163kkoxceyt.html

F. 文件与目录
来源：http://www.sxryk.cn/163mjqyigac.html

================================================================================
来源：http://www.sxryk.cn/163aioxnasd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163cpdokysy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dwmhmyoa.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ydnzsmyf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mwepmbqg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163oradbqwr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uregozaw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163srqcnvws.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rfojlbrj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mfhhcscf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tvlatetf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163nnuobhcl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163waaupprr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ggnemteh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zelvscjk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ypdqfwdj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163awpzfhht.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bvxibiry.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vclypupv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gdutfsuc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163uyxcqztm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ofsgbcix.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163njvcfdxo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jdiguzgs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163unwihbdr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163lzwzxlua.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xmzdfbjw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rfhcczvy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163svofziji.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163orkhfacm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163owtswnow.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163aoygqmah.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163enrgsabb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qurlwdpw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163iayrqgwg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163khmhvcln.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ozcrrsas.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163budqptok.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163pvzgobfv.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163kepumhts.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tbjbyehk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lzwetgie.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iskcptcv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163magtarcg.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163eeqxqwwk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163hqxirhsx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163flfvgyrr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163jnyzrkfq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qvydwpio.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wgsrajkc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nroacpjp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pmvfcuhu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163btklybrc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163sfzqmjni.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zdjorplu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163bpyctgch.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ffogkpzi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163turgxjdt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rvwfespe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kdfrbnno.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nuxnitxc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pvwnobea.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163dapygrlt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163frkisxyt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dyplhktb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ugbjevwr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163tysysxdi.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mlkjpexk.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ajcrhkvz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ptftfmxy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qlmphqtx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163myzhkfcu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kvadlrjw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zcsnuyij.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ekzhpjzs.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sqoupcnv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163sfkbjjhd.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163sidrtktl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uoltneye.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163pvvyabbo.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163knsmiunx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jvspxwbb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ockqwuut.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tbzonrhp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163daanisci.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yrrrbbty.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ektddkuv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ylmqkntw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163wliilpwt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zqgtosnb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163oneyvovr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163zaejlxei.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vyorjaxf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163qzpbbduj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fisvistl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pthmnoqi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dwxkldvz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tzgndwam.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dckgodil.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163xcwyzbhg.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163tkeqbgld.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pyxhoimk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ggcegurm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bmdsloaz.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tcxhijsl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vdmdpaqh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163kwagvzcr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163nilapbhp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163btphvwhh.html

================================================================================
来源：http://www.xuanzx.com/163igwumehc.html

G. 面向对象
来源：http://www.sxryk.cn/163jbjlmwhk.html

================================================================================
来源：http://www.aibaodan.cn/163umkuwqir.html

[G01] 定义类
来源：http://www.xuanzx.com/163oqkyahen.html

Py:   class User: pass
来源：http://www.xuanzx.com/163nhsqzthu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163lzspmjhp.html

JS:   class User {}
来源：http://www.sxryk.cn/163ctoyydlx.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ycknsxqi.html

Java: class User {}
来源：http://www.aibaodan.cn/163mmpdxfdp.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xayhcikj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gmmtetro.html

C#:   class User {}
来源：http://www.sxryk.cn/163jymvybrh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163crqzdyhw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163mhbcauxh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fuzxnavv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163uknmtwpf.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163dahfbltn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163npspoium.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163poxjgjht.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163eknpebpg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pssfjsds.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163khivzior.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163hmowvufg.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ekgpmvzu.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pzvzmxhf.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wfvwhtwj.html

Java: private String name;
来源：http://www.aibaodan.cn/163evwbwqlt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163czdpelmi.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163adyejsyk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vxvbpood.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pjwcqhhf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nxfepfke.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163htegiibq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zpwggowa.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hafcslti.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163kmjqfiby.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fkiwecmv.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163khhzlcte.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zydnpkzj.html

[G05] 继承
来源：http://www.xuanzx.com/163ugbjqjqc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163hdujrjcn.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rdvratzu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fepkdmdr.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hkfbwmev.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163yqcfiqjw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kxjsukyy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163hnatyads.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163hnvgjdgy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163rgnmxxbl.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rxgbbljv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xcitudgc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gwcjnqyk.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mjkxsexr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qrobiubh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ciqphola.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dsemgxkc.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163keklezsj.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163nefbjgza.html

Py:   super().greet()
来源：http://www.sxryk.cn/163tnascolq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vbifffez.html

JS:   super.greet();
来源：http://www.sxryk.cn/163xlmoswmj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163vsobogze.html

Java: super.greet();
来源：http://www.xuanzx.com/163brdptfjn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dqrbqvyx.html

Ruby: super
来源：http://www.aibaodan.cn/163ktvmeynx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zmhzwyvt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163skcipnuj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nsgdtrgi.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jenbewtv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163avhkityc.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163gffdniht.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163khsjjoeg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nfinwizg.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ertdaykd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163bfqxqfum.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ncyurota.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163vsrzppad.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ryallnax.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gmhawgab.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qmwtouxs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bbjnyqsj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163sfrhlrvo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ofzkbvgk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163bsrhghet.html

[G10] 访问控制
来源：http://www.xuanzx.com/163bzwzoebd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gwqnmwxn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163yzprdfyv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163buaxkydu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163aqvkqthd.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163xabycfrs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qxcjkxny.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163qlktusfr.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mqbokdgw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jpjxhqkz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163qzddbszb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163prmndumq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163tkenegju.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163znltlttu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ribrqism.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163kshunhwy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gznrkirt.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163swghhcox.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163owvldtve.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163tjmrzdwm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hcklxqwg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163czvcyjyp.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bbbnkahp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qinyvrgb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ncspqpik.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163szvwwcoa.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163flpjtume.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163jzmbnbta.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ykfhpzih.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163hnphrjcv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pehtscya.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163bduqnyqi.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wyukgrdg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163yrjkpfsr.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gpwueutc.html

C#:   u is User
来源：http://www.xuanzx.com/163zntwtlos.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mmoxnxxx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163loyxhmau.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163uozxecou.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163joqylleo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lhzatrxe.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163mlpgffxb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hfzvafid.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163fxzkrhem.html


<!-- 参考信息 -->