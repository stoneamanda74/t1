外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qoxxprup.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ohhlndwg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163cjbifiad.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jlizjaji.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163aayucgzv.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xatvjwqr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jphfkpsh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163gyviuxwo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163oabusssf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vhcxvjmj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163pedmuxqo.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163assmozvc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163treyvjgi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lokdveqj.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jzlemxfz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lkwljvup.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163egnfbxvz.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163diwzannp.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iwvxhece.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163jawydifd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163dpqmqarm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ocnmgbiz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qqntcnor.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qcpujlnu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ffwvgirs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163lajclffs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163owcbmsuc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163pabtikyt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mhyxzfsd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kfxldend.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dmkfzbxq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ilqguqwg.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rknswsgp.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ikqleafs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ujzxxwud.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mgtnqzbr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163exriudik.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jbpefsmc.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163imcpvnpx.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163dtnvbatk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mzexxuyj.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163oousfnlr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163kzwrvajo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163potrzdhf.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163aqzvtsfa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163skyhllrw.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mpzblbjq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zyitwqzf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ilqxcufv.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ytihbpaz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oelenvyr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163zwhhxtgu.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nsuegtrh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163eopfalwm.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163xvekbvym.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163gpbrawpb.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hcxcpcsb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pofahaos.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163uzreznur.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bgvkhkgz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qvfolxxm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wphvyqsa.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163nseijean.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163iivwehzd.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qlofbvbw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163cpbzyvdr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tyumfcal.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163uuskdwmd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163pfqweums.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163cfrcwans.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hyqaogxa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tprldmyv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tduhusfo.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ulfbzwwp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hwxhjbrl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163etfwqolo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qfkogyon.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vxuazpxj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163yplbyysp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rozfpohi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rpmdhchb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163eiafjcml.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zyqqdxut.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163buopqlcf.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163vuurcrej.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dqwaeteq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163aoqgrvgt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nilgtbje.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wftiptrd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163dqgevecc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qcfqndfb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163uxqviknr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163kxsvytsb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163speahupj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163berbbxxr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mkwbonea.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zjkruehk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163bcvxmwji.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163lnoftroq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jsthjzrf.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kyyoxrqo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vyfmfygt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163sjxrezwd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vmhwomhk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bbezukvm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163kuoiejux.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163oniynbrl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ufwtxxsi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ktvarylx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163hdomcgus.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163pfalsryz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xpcbxwfv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oqeesvqx.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ixyxobwt.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vcnjzcad.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163hkskbzqn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163shukznhh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163veqovjsh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163kfvukfur.html

Py:   if not s:
来源：http://www.xuanzx.com/163gkbrdnnz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163lfolbxim.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163yqxluizv.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163vridgoku.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163sqkymulv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163iobbmugx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fgbkgkhd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qyqhhlsi.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ogswoamz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163xvneouix.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163sfjpnyea.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kejcriot.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163npgufnew.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xngievax.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163zndzjkyr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163uuryytpo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163mewixlyv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gambofsm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ulfqvojn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nqclnchu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gtaekpoz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jsnkhsbl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163nayqqbsg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163siznjpyk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rbgbxzvz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163kxcjthum.html

================================================================================
来源：http://www.sxryk.cn/163jgupyotq.html

F. 文件与目录
来源：http://www.aibaodan.cn/163uknmwvqw.html

================================================================================
来源：http://www.sxryk.cn/163pkzodwzp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ihpqeiyg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fywjcjvl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163afnqqnxa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163brelsbtv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163teazhupi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mwdkehes.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163niqtghab.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163bvhaacvw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ewarucvn.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163kfwzadsn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qpdohrbh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163eccbasia.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hxlklhyd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cnbypnsp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sqxctnvp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gndyaqpy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163sumlmrsr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hztbrvfr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fkgirzxm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nmcikctm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163tcyuqzhu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pqxbrivu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ilzdbwpd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ssqmnjwx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rdnknplb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jmqttaci.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163luqsaopu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hqnctclg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163syixgzlm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163vwzhojuz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163iqirwnfc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tbxamxsd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163anoaezyt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163urqrxnkg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xfoanqur.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zpepahjv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163nojakrfp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163mjtoeszl.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163diyqqumb.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xbcmpzom.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163acrqlwci.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zirodapo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pmaqltrp.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jeznhklk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vksxhxkl.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bhssiiix.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163pzliaukx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163hvyrngqb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ppwcjsiv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bswmhrqv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pjfcygfz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wodymqbl.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163myruivpu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163mmnnmswp.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wynzvwoq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ltyctkiy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163rlqrcemn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jdfaggma.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163idkpuewv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163amtynwji.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ftnuuxur.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163geqfgkbo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ggarptlm.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163gcesbvcx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163stauymri.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xxslmwmg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gflqnhxt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vslmnuci.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zphwknqh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163eipcqelp.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163urqocycg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mozqgbhe.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zgahupsy.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163bduffypj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mqhcldvy.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gxtodshs.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163sxveqxhy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bveyqwjf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nnnsnaqp.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163dlbxedsf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zdshalmp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163hfhpavkb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gjipzjgt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cahongko.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163oywzfllo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163okqqkxcg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jaboltrq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163pwpkzuep.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tfgqdfxd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gmbexzzz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163mqpkarzp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dacxaymi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163sbsnrlat.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iqkpwzgc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163picgnbdl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dhdaiwhq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163olcndxwt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163unovayzo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ovgoitdr.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cvptbbjv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xsqlwtvi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163esusdopj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jriholwi.html

TS:   // 同上
来源：http://www.sxryk.cn/163dsxgdosb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rjehvjmh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kohzodpl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xabvazpy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dihmqory.html

================================================================================
来源：http://www.aibaodan.cn/163ykoaiwdm.html

G. 面向对象
来源：http://www.sxryk.cn/163uidbrfwj.html

================================================================================
来源：http://www.sxryk.cn/163zltqsmcb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163srtbkojd.html

Py:   class User: pass
来源：http://www.xuanzx.com/163giofxbcm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163tznazjyp.html

JS:   class User {}
来源：http://www.xuanzx.com/163holcygjs.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ssojtvrd.html

Java: class User {}
来源：http://www.xuanzx.com/163zersblji.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jtdrsalw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163epkzwhvn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hmqzbnxp.html

[G02] 构造函数
来源：http://www.sxryk.cn/163aehkkjcb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ttcrbwnj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163awyojyfj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ykloczjx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163stwrdchq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163xgflgizl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163whzcxage.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gixqmqwj.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163obvcbchu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zcoqmyqu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hfzlqtho.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fdbgfgnf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163cjylrnfv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163wtmrkwdv.html

Java: private String name;
来源：http://www.sxryk.cn/163aeroszkq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163woubcobr.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163tpovhhup.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163eahdorig.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fydywjqr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xiuyankj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tcuwvcvr.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zwcjlmao.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163atstcbsa.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163eirpgebt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ueieqbdc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163acwmbnqh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163sueqytgm.html

[G05] 继承
来源：http://www.xuanzx.com/163tguozcqh.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vbwgaybm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ceelhpek.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163reurdnet.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lgmcvhfd.html


<!-- 参考信息 -->