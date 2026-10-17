外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bufegmyf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163nipumciv.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qqjtezon.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fpehygaa.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163njwxmcar.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163tjboozbf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163nhrbddal.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163jlomppkq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zfgiwdsg.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ghoszola.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163esmleepj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mewspbww.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gofpxnkp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hzphdume.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163szlphipq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ldtlmsxt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163cjuhferp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vmebbpfg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nvgxndia.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xvtoqntk.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rujerucs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163hzyqfczv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163sorwopne.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nquenoed.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ckdnygnq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ipsopzkl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163svgbiofa.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jxexjrci.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vkxmjkah.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163nsizsnff.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163kzrdfxcw.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163aczjpnsu.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163exhcvdxq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lmmlgfqo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xclfkiac.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163endfqgeu.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ffrscqta.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163colhxhmb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ynrsbenh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163cylafbwl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163kmlwajlh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rgchelql.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163anxazumw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163jybensij.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163tvmoptkt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jctvpskp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163infiyfxr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kqraszvc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163cvsydhlp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xyfdqtqj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qezusbaj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163sgyxkbll.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163sieqhmre.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ngfcdewc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163kbxfdykq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163eevkzdik.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bzbgxyvp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163sjrcwrdo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163oupjkdsu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ajcudaoo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vfdtbidu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163dzwivoks.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ewwvltak.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163xtbwnipg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163rwuelwjp.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jlhwbtae.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ypyynjxg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qibulzrk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ldyfqtwd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ergytygv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163afouypnt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tvrurznu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163gswyholw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163emjwrwcf.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163hkjfirqo.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qcnribjk.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163fsgdleky.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rkpwofkk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163avtmijqs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163iyrwyjtd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pcjthyod.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ufokldne.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kinpvjrb.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163emmyoweh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163zrefwcvs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uqzmxrkz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163eejejuly.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wfwbmits.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ixenortn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ukvjqutm.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163auwkaehm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163liozafvo.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163pmqjdpky.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rsoglihg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163uivtcrrd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mbldrqzj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hochwhav.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163dqoedrvp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163nuxnpycl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163oxhfancr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163bwbajnut.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jugueivb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hsaebonz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ribbialy.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163usyqztiw.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rsdntkmt.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zypedlpq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163nekdswng.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hkypvkep.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xpdzyzjs.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ilzciaqu.html

Py:   if not s:
来源：http://www.sxryk.cn/163sfkyzvnx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163namwpcan.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ircaxfzf.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163lzyjxopi.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163cxrjujaw.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163cnhnskvm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jkmkvtrn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vkmhfdbe.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163kosszhac.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mxktbabp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xobjdgbs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163guaykrqx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cnptxlod.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eacnpqei.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gplifnss.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xnynnmsw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163aywxlwqj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xtwfwfts.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163nozgdgnf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163uuaemauc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163eguwhrat.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tmyvbujg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163viulhbir.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xoyvgfem.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163dvhaeknr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163renxccks.html

================================================================================
来源：http://www.sxryk.cn/163ddrijnps.html

F. 文件与目录
来源：http://www.aibaodan.cn/163djqksoac.html

================================================================================
来源：http://www.xuanzx.com/163qfxcdbzg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fvbzinzi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163crdpmpju.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zwjfqeir.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qlibsipu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163tzktziwt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hnndknrl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qeyaqbul.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163akjegcmf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kgdfivti.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163eqpfxzbm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qtdtmnjh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163pfvbxrrz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xctydbmz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rcpnwdkm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163viserxlk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fbpucmtv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zwoghuik.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163leltuyga.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cnwdigpe.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163emwxuuau.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163snvmlhat.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ugdqntqn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163aukryujk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163akhflebw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qkdlldii.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fhlmvqyo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zwdwbqih.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163iaxmglsx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bcobohsf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wizyjdau.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163saavykxs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163voncmegz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163kqzsbhib.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163rrntajsy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jjhuymkp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vspvoame.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163nufmfrtz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163nklxyuns.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163otxyalom.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sxqwxytm.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tzngjfky.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163knjvtjdq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vzglixkt.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bwdrijbk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163drkeeyyv.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163owtghguz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rukgnecz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dtdoonwi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163htxlbixy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mkwcahde.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gfqtatxu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163spzjtzxy.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163cfgyzbes.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gaufpvyb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qnqmzdwv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wgqnczoi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163geiyhabh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xwwuybgo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163htglkirr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163byaevguk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163henxdjzh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zqlmkolv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163hndhecbt.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rhhezifj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ijxzdpvl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vkdcwurd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hdxxelqt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163stvowcqx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gyiwsuca.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xghufgjk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ufexeuvm.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163iwfedyvz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163joyhztky.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qvthlgmy.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ropjvboq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rxzgxlpf.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wmyhwinh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dbqolsgi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163gsniqzuq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163hrqypfjl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wlnfyvkd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163cwjyllbn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cbajlvfj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ehfgyxzb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fvbhxlmf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ewxvkrcd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163nsoybodr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ulvajloi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cxylohol.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163pviirpic.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163icxbnler.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cfqexgyy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163jddculgk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163noimqbws.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qhzpftrn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163fzwgvsuq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lydxklug.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163byuelpvu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163obirtzom.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163msqwpycs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163spshsjuc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163nbwqegnl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xknolxbh.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xxrwhmqi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hhmzjthp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163cgpdbloz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wihxvhmq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jfueryat.html

================================================================================
来源：http://www.xuanzx.com/163ogeuipyj.html

G. 面向对象
来源：http://www.aibaodan.cn/163btdxyute.html

================================================================================
来源：http://www.aibaodan.cn/163psskyqff.html

[G01] 定义类
来源：http://www.xuanzx.com/163hakhebjs.html

Py:   class User: pass
来源：http://www.xuanzx.com/163sctmiygl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bseolias.html

JS:   class User {}
来源：http://www.sxryk.cn/163bohtrrjm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163cbjqzaza.html

Java: class User {}
来源：http://www.xuanzx.com/163nrppakuo.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163kvlhqiwq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hbhgidhz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ieipgizv.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wxgjmdil.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zvegdkvy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163cysxdnev.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wbjjrkbd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163litzozol.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163mprrryej.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163demxbmxs.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ahtqtnrx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vxtpshbz.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mzriilfd.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zuzvvsqq.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163mqdgonzw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163gsvhmoes.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163rehybvci.html

Java: private String name;
来源：http://www.aibaodan.cn/163ppuhtvzv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163zjhkuvea.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ftnjfwom.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xxqdldmg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163acytqzzy.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gaaigsew.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zjdiapib.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163coijwejd.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wfojjpru.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hwkjkxjl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wrkwsxma.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zxrhntyx.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163emgfxxnh.html

[G05] 继承
来源：http://www.xuanzx.com/163akeluesx.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163sxihioqx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ebizqjoe.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163foxlbycb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ipnxpdzj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nvbajsdy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zfamnklo.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ebggohqi.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163occlpfyb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163aikoifiu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kurlwtdt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dahwrqyp.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ktfvmceb.html


<!-- 参考信息 -->