外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ecesxjlu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lwrjqkxz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163kkdkgswa.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163akaakyln.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163aazsixoi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bnhdlygp.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163cdfldhau.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163kdqxsric.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163sbmgxxgf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ljzhlbph.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gnbotedj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163mhtehdkc.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163srzldswv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163eqlwaamp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ypquldgb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yvvldsrr.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163sjmxrvgh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163exbaetle.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ohgcqpco.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bicdzuyj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163nseergbk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qhslhygv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163lnxqpxfx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bwmmigpj.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163xhanlrtm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163vorekwax.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163cricgnyo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hqtgjuzq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163omlpyxqu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wwnaajzm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wnjbsvbj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ruoyymbd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163oxzukxwj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ohwvrvqu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mpdgwend.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163rftyvcfa.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163dfmsdnrq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vcpyxkna.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gveonqme.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163cteeijsl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qpmalcvb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163iblrhzwh.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wzduvtew.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qkrxduoo.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vwdgobke.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tpcgyaag.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aolbbbby.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ucpjkqra.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163dhhcatwd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163omjpgvkp.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163gfgmxykc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163uxkamodu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hndvzico.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163fysppzzh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nzzgqrby.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tjnpskoi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163dqreylud.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ffscitsu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163mzbdghdx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qembjiji.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yoiwbgfe.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163efpvscbr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163cmeljtdm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163eczlufqj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jftujjtx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jgdgwtlr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163vogzitzt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163wgvkorsh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mheyvjbo.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163calvlaml.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lgicmchm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163varhlyye.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xshgqhju.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bzlpxpyu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163yomimyge.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163zblxfndi.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hsneegmx.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163oboizdsl.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zqatezco.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wjmnrnab.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163qujhvvhm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163oibqrgyh.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ipepmdzt.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163nonnfwtt.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163whzdyokc.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mkstoogj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vvefdnac.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163inqkvaju.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163yfhxmafa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dqqaegig.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wmjilpdr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163apgnyfpx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kxqvckez.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163thivkeqn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qwbwcyno.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lryaudvu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fzdoadza.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gqllyqxx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163azgokniy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lyfnxkrq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rwysdvlp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163cfyrjwqf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163zfiwfqak.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kazffvrz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hiwcafuv.html

================================================================================
来源：http://www.xuanzx.com/163fiiuwcor.html

F. 文件与目录
来源：http://www.sxryk.cn/163udbthdzt.html

================================================================================
来源：http://www.xuanzx.com/163srbypgko.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163nvwitqzs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163puawysks.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ltzwvzla.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163jrzrfelq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163peclqozb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kiikgiep.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163eyvwejlj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pfgocugm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yjcbavdo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qteywdeq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kkqozzum.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cxqhqlsv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zjwpicld.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rlmmburf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vorgcvxr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xyueruce.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163arvrktrs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163yfgglimn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kkvtyunx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163frhmfjjd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gtrweqwy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jlkkyzvu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163etmdfuek.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ovibapbc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163uwobllup.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fbekuwsn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ycrfdywp.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qpwszams.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163iyztqfqq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ldzvtoaw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ogtxswvn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qyedaesf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rmrrlnru.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163mfjtbtcl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ijqildpu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163pdazniph.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qhhsjdpl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163izyjdbay.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zffiphjd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cslhhlse.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vwfhjsar.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163asltralu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ozpblaah.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163jxpufzzy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163mzcbgfff.html

[F06] 删除文件
来源：http://www.xuanzx.com/163onmfylhn.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163stjazmhi.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qyzhgedu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uqpwtelp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163sevfmppg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sgctdvjy.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vwgxinnn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jjleysux.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163hwnfvcso.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ffhlcwpy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qdqxocoz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163chlkubvl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163txwptosz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lwvhmodj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163oxhnrztr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pmsljxzy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163toraseuk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163sfihswxi.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163fvxdsnre.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tithrkgj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163uactakix.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xowzcejh.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ormkdwpg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163uhtzpfck.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163zrabdejz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pitnpuxv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163fxnxrtbn.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zffgcrjk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vdkwdreb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qqqamitn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163shmhytdy.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163eejctmpm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ylaiscgp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vdmbljnt.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163upmpejbt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163gbnmzcsw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ujqhgdjj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rrncagdf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163scnaczir.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iczeeemi.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163drdqihga.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163iyualisi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tdydjmpg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gaucvypq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bcxepryr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163nkexhkco.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jjqpquvn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mkixizxu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dfgapqvq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zckrmgml.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jkjffcyk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163amrboexo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163egygbrhq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wjhikwnf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fnbrfcbt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163usnizngz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ovteodhg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xxpsymjr.html

TS:   // 同上
来源：http://www.aibaodan.cn/163mudnrqgt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163gdkhpvoh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rbhmcdex.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163zzrjkmsu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xklyxzvj.html

================================================================================
来源：http://www.xuanzx.com/163mihzwayf.html

G. 面向对象
来源：http://www.sxryk.cn/163emjiuydr.html

================================================================================
来源：http://www.xuanzx.com/163kptjkktc.html

[G01] 定义类
来源：http://www.xuanzx.com/163ryaiorbg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ohafcpnf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163tnujderi.html

JS:   class User {}
来源：http://www.aibaodan.cn/163iejjgioj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163uiosxbjz.html

Java: class User {}
来源：http://www.xuanzx.com/163zbyeasdz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163aqwpksrj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163glhhhqjy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163wpjvuzqn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163blprysov.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ykyjxoev.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163macyiuoy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ozwestvn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163psncqpuu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ibqdnxxy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163njmyruar.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nmrduyan.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163kvcingfp.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fxgmeabi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163rhjxygzg.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zyduivwt.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163kejpysta.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hglrpdes.html

Java: private String name;
来源：http://www.sxryk.cn/163zetncryf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163cnjjsyhw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tzmtdhyh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nkuxaskp.html

[G04] 定义方法
来源：http://www.xuanzx.com/163fdzuzpyg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163cqblqjvy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163usyfqvjb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163izfrfchu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cmddxwpe.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pclhlqnp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163kldtrbgr.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163pmqcicrx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ryvwyuhe.html

[G05] 继承
来源：http://www.aibaodan.cn/163lxhvptrk.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163nztdfegd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163kwsgsztw.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163osvmprea.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nmimpahf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163oqcbgkhx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qitjjfxw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163thoxmnkm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163coqvljie.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163sexlvupb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163lhtvympf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pzocbsvl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lfcazmcf.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163yfssigtf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wlborrqt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163rkcdytmc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163rlyeljhx.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tcyxnidz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163icbpkbik.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jkfcpfpo.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163uvimbebh.html

JS:   super.greet();
来源：http://www.xuanzx.com/163aqhwgkas.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dvjgefir.html

Java: super.greet();
来源：http://www.xuanzx.com/163hbakbmsn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xrvyzgre.html

Ruby: super
来源：http://www.sxryk.cn/163vvqalfns.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hsafddeo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mgqemorv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163atzbwsak.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bhdvyhrq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163sjgmlotv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rqidslmv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hibmicjt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fryunykj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xzfmqoas.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163usapjypf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jdzrvlcr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qtljulpd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hjgbxyos.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163rqmuchgx.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cvfprdyu.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163yhwdhywd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163nnxtfiwe.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163jpcekypw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163qfzmkvms.html


<!-- 参考信息 -->