外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163iyhqakto.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ukftrqgy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kgjttwdi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zrfbulyy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ostrspqf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163azaicjmi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wzjlzkei.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163uwkhpopq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rxsxemho.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gbtyysrg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163llnaeukj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163idvcgkdi.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nmwabpjd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qgpzxvol.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163mwzjpken.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163wwwljkqj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163hxcjurkj.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163rpgopijf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ohejdcbm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mqnpwocg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163nkppskjg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rbujjtub.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vyivaeyy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ticcmxbq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163rarqhypx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tkiziixf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mdxcwlfa.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ijebddud.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163leghotya.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163agyzjbbj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jozkpafl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163svwfypod.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163trtqopjx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163urrcanzu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163tskpsdgo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fxhqjnyh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yzhziezz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163lfwzubwa.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ksxbcxsw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163jxloeumz.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163plkrptjh.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yhofwumq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163pzawikee.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163smzqhgrp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163iopegusg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vrgyoanp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163wslcjppa.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qxnpcekm.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gapvzihj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163erxjvrlu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tqmykifk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163pcyponwk.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xhbqsaff.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xebcfqwz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cojzwkei.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163slnbbcvf.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jjpquoan.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163bnuaxuti.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163daznxlux.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163obljhnzc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163alxlsswk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jnzimufu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xylwboap.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ioepijbs.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163sxubycyp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ejkcgszq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rbwdnxli.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vrnblfgo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bodbqtss.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fmxjxiua.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pnqxgsqe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163txcxqkyl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163wparvlyg.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qkoogipx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ftiqleju.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vmuekeka.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163bmuloyyu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fqjzsckt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163flrsnkoc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163dzsnupvp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mogutalb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163pimspcex.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163mmlcjcpp.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tlpxicyx.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163labmidtc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aykikdkh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163erawxzuu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163rsdxmcoh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163swaetgpf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ecdkvctq.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163kdzxjlke.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ggialnxc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163asbwpdwk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163tintwboi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cfhqmzwo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hhajdxis.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163aovactsp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163uewyrsky.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ieqdjipw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163tlgtxdwy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pwzbdlgz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163almuwrmv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163dkpopctu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uyyumqoq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sbgforel.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lcazzyfs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mnxbbaaw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vomxdrhz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163kzwspbqs.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163hbtcrsnc.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wbvlsbbw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163smognnrb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oojkepql.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rnktgvgb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163zlyohjwu.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ivfbzfhf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ribbchoe.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163sspnfark.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163acpunvxi.html

Py:   if not s:
来源：http://www.aibaodan.cn/163fdyqepca.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ttgvbdis.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163cwxfcupe.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ypetssbg.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dvnzvrkm.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163jsvtpgtg.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163jcznsdnf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ijcyprmd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163iqywvfsr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163qaomnkdv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163otpaxbts.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mmmtlbet.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rtaybxld.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mdmpyzef.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bigetbhm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bdgnzfzk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vxttxmtq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163euatpfon.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163majazqmi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vpgqyosc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rsqunxbf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nfogrhdz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qtxvvlsb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qsnvhswf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ibisdtzj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gewdccvn.html

================================================================================
来源：http://www.xuanzx.com/163cmjkqzde.html

F. 文件与目录
来源：http://www.xuanzx.com/163zeocjrfv.html

================================================================================
来源：http://www.sxryk.cn/163sckproeu.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163oddakytz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ldjujfjy.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ktfysrkh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bqrgfozo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163kvqsllne.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163orhnaazc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163oshtayrf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gmasejlt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kgyajhwy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zlazfbwy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163souqilwc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ybsewzve.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cjrnlcoh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fmkjdllv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mqyzotdx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163trnyemtx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ltvpboyw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kmnfzavg.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163qxsjeysz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163cxvizxko.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mqryqovt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uqbggrwz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wbozzmuk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163izzxiiyf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bssksemx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163txleqerp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yleftiit.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ntimslqj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163qcndaxns.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ehpfukdp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wtdlwlmw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ppyhjrew.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163kfmzsobu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163mheixeuy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163opumdxjm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163osobrkoz.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163zbfaedlg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163setpmddu.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163czfecull.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pwxrwrvp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dpjugqqw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vtsvynne.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xwroihae.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163kjerjtxu.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163bhcpprlb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163lntpsfdi.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qpcsyizi.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jwythasc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zumrbbtv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gerzizmu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ztommauw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163rexfrgtw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163khjbzmvz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ifqsvdaz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fgwxdqre.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163lvzoqerl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nxllxvlz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tdknswpm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gnfblwzx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fngvqvuk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163gwpqwmzb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163fizfemoh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163urrxqkut.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tskvoopf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dgfbduoy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163oaqzhatw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qedsszeo.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zevcdhtl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xmtwiaba.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pdxwzdbt.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163sawnasfg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zmpmykyp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163iftamlzj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pagbknay.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163roozvnii.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bqkifduk.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nctrfkkm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163velezrzv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ksqcoiou.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163iowtpnff.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mbocavlk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163brpfsmqm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jjutzmri.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163exeaxdmp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wiaqpjbb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mvdoohhd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163snxgseuo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163wzsveqtk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bhxidnzu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hgyciuxo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zoarsvep.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163viyjdkly.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163esppvsvr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mlnwemdm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bdijokvw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163awvjmlfe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zujhwsfu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qspiftgo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fhdinkva.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163geuhqwja.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vlhikmcj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163rqykyoic.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163raybgrqf.html

TS:   // 同上
来源：http://www.xuanzx.com/163nfyetvnj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163qmpeoqcb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ytkjsauv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gtbpeloc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wvgeiqga.html

================================================================================
来源：http://www.aibaodan.cn/163zerdegrr.html

G. 面向对象
来源：http://www.aibaodan.cn/163zoawjgzc.html

================================================================================
来源：http://www.xuanzx.com/163cpmfigmn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163sxcbekmb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xmgbtltg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163iodhyifv.html

JS:   class User {}
来源：http://www.aibaodan.cn/163avnolgpw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tuqnzcmd.html

Java: class User {}
来源：http://www.aibaodan.cn/163hbnbzjqo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163tmjvkluu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163pbkmzokw.html

C#:   class User {}
来源：http://www.sxryk.cn/163vowedxhh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ketvltjr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xcvcwfwk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wswlbqzf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163eotdasnh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163juzehtwv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lhqdgpwq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ohrjplep.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163sujykngl.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fmzsdxyx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163jiurxfbt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163kokkhwaz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uoiadciw.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163xjzalwuo.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vlsyaywt.html

Java: private String name;
来源：http://www.sxryk.cn/163nbbcycjf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dyzpvsbg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qkrccmvn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163mniytsgh.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163vbzbrxag.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lizpaukz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nunzarpn.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zoriuvtp.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zyllbhkj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163aeuozaak.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jpvguvrp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bkwwfdou.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163rmjpxrpl.html

[G05] 继承
来源：http://www.xuanzx.com/163aidtcsfj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gycfzxbw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163nufteanz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bhynlgfy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xvpjctbj.html


<!-- 参考信息 -->