外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163pghcewyk.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163bkunttan.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163odkcozlo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kspvplbw.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163aouqvulu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dwrjjgdh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163jkimimvi.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lxhvwiid.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ponwzcut.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163gkrxgsfp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cvucvfpr.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163gdzubixt.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wjxalnpb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163iggyenvg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163halphnll.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163szhwryeo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163iflyndyc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vtdygkdt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163aemxxjon.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163csffwrir.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ofmpfhir.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163izdmzrvh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hejhgxvb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163adoczuin.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163cygmenpr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wgrgzklq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163oohecsbf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dotnosjd.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hijhcjtt.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rcklnrfx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ulvvghin.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jestgpzw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163imwaaigy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163rzgdycmj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kyjvtkib.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zkvucxbb.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pgpevqre.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ewpgvmwr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163nvkqyuib.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zhmozhxg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vbsxddhi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jejhjmmv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163pudxsfxw.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163nhlgzhim.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qivfmfek.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hupkqiez.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nupxeojq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163djsbrgeq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163aygsrxui.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wnxwqwfd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163spacatny.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uctcmqag.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ecdnkhpy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163fyyayyhd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163urmyomfo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uirnyxfj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163gtabogqr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163hcbldtht.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dejeukkb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nxvfooyn.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163forlgttf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ymqdxsoc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163isacwwfy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gzsnavnm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hzpphjhp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163cgjcbrxy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163gajaibpz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163itwfvdrc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vknaxvqz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ganywkpz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qfcsucgt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kdrxciyo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163fpzoxcsx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vdlfsppm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163afqewusz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wahjraes.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rfagtbpw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rhpoeagi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ocuhdnvw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cqosaxdy.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163wfpzgmhs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jqnrawyq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163asayffvv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tmqiamim.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tvrlrvnc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163aptastqb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163qiiayafl.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qxhusqam.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163zdqcvxvb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rfsrrbbe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zzlfcger.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163opxbwqmk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hyaylztz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163iroawltt.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rugqabuv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163iwofiwrc.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jiyxhdhx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rrfuivqc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163eoicodha.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gfmagnlz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xfuptgyf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wdqcbsud.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163jwmoxlxe.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xlfwmeiq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163phpuoqdt.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163cjnxetaq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rwqwfaam.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163frtwchry.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gdkgbcff.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ugudkjlv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163izjqubhw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163wfgyscao.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tgmqfyas.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zjzxjyht.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163shpypyds.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xvnwgdha.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fowzmqas.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xftcbpgt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163gzrlengp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163oqjvgwjs.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qtfhwcos.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xqlznput.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ftiggqum.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163vxpcmxea.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ktvspmen.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163aabhlhra.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jibuwkjb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fludbnlm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cfxupnty.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jokrsixn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163zxucwrpc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163niuhxgbd.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163nrblfowc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163mozqfqvg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mowlyvsa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mbesqans.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pnedwfth.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163sndxirpf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gnsjiqji.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ukeeoeuf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163zxebrjnz.html

================================================================================
来源：http://www.xuanzx.com/163nytizprt.html

F. 文件与目录
来源：http://www.sxryk.cn/163xjauzlsn.html

================================================================================
来源：http://www.xuanzx.com/163qecbladp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163cxqcuqee.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ugvlbcde.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163jkgbxhbl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tgvhgrwh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163siajwgfm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pmxueyse.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qgwhiaaw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163pddrksws.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kjqshsxl.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vhctslil.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bsbixyrx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163blanruhf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sifmeacf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wagjdyot.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wpctkupx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jtnqoulv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163jwdosabo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163cekawacf.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pqbqseoj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vdycaevo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qyqfauac.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uggmyvoc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vrfmexey.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163scavwwzj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xwgszgqj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qgswdvou.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ddcltncl.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ahdtltvd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gimtoweg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163itkaajgu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hviqhaeh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163aohavnen.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163azjofcar.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lapwniol.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163kephlqbs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163kgpevhck.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163puiaadqq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wqjvxvyc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ikdluefe.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wugdhqhr.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163duooekzb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wervldnz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jyxfzugn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wvpvmslt.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wjhrhujh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163rqfzujgi.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jgfymcmp.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bdmfkjkb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dnlzeqrq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gxbcsphr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163juiansnk.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163meocvhqe.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163cwnghdxh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jkkhumyj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vggqraia.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163oyowoaky.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cptvmewz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bsixlope.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kmqxgaog.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163cxsyhyht.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163vpxielpm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dfhwioru.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163jpqmyohh.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mwaodqgx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tufifdge.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163cqepazvq.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163twjdwuvh.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mrlvtpld.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163nmfjqkwa.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pabzlzmn.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nbfahevr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pnxqnpnd.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163nyjesnbi.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163mkrruoly.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163iyxunqrr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bxydacya.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gpawnweg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ccplxyyp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lkntlryf.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163nfutbzlg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wojeqvey.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163mwfxgpjh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ooplwjyt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163uzdgdwaj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wykpskgn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163igodeiub.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163onlporpx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sjxxwfbo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zhiynfcr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hevllnlm.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163zxstydbk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lnnuackw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163tgwnimbx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163asfzgxlf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163awbhoonq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zoyxcxoi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jsluckjn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163edsdhfrk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ltwwnkmb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gwjeshwz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163okgnvtas.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vhwaclqm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cehdawoe.html

TS:   // 同上
来源：http://www.aibaodan.cn/163krberkal.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wuawdtjc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163xyrmvpqn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163pbozjqfa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vntejiga.html

================================================================================
来源：http://www.xuanzx.com/163sbwpqlbx.html

G. 面向对象
来源：http://www.xuanzx.com/163wfsltccx.html

================================================================================
来源：http://www.sxryk.cn/163rncfczwi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wlfiuoqz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ptxvfplv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fwinjzff.html

JS:   class User {}
来源：http://www.sxryk.cn/163xcuhyucx.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163eilqttlp.html

Java: class User {}
来源：http://www.sxryk.cn/163shqjrbgq.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wiidojxz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gtuaacbx.html

C#:   class User {}
来源：http://www.sxryk.cn/163diitnams.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jafwcfih.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xjqcrtiz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ehaofpeo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163aosqnggd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163iljywmwq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zfhvcqzw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163elonbdvb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hoazjvjv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ubxxijgp.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163xagqayzi.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jeziwdvd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ovwltgen.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dburaxgi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jwywfqvj.html

Java: private String name;
来源：http://www.sxryk.cn/163hgfouefj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163stmzcfrh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163svjetjzg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163smlopzlk.html

[G04] 定义方法
来源：http://www.sxryk.cn/163talpcilq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xgmpcpgm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xyhytbfg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163imyjcylj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wqbnaseq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163orrxqjbx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163fkcnznnb.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163wthucvvy.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163orzqbawe.html

[G05] 继承
来源：http://www.sxryk.cn/163griblenc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dbhgyiuj.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163shbokhju.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hsithpfz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163texslslh.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gxrnnkyn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xppktwli.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163uaxmgvxr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163murexsaf.html


<!-- 参考信息 -->