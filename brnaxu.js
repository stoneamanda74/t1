外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163evuwscgf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163otrsrsar.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ykvlmqkh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vqfbejwq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pjlfosvt.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163wncbgdnb.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cshvherh.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163szmgabgp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163eybfzaqp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163cguisyfr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vffkgpwh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hzylqzbe.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ncgkirrx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bzamhvyy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163drjkhoes.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163oskiqajw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163nubsrmny.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163eyekkapi.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163yujfbykg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ajuszigo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xbkrlblg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163quaocalu.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163nhqetsnp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jgjecsjc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xjprcfme.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163montovys.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163aggxexlf.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qcjfygmy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lztqymri.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163easmyzzv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rndltcmd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163neautwvu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163kaezjldk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163qufdxsnh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163aarlpfov.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163amtjquoz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163veyvemza.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163kuzmewja.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163bbkgayfz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vahzhtcn.html

[E06] 替换子串
来源：http://www.sxryk.cn/163fcqedjzm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xbtvrlyk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163dnbpqnlc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lcgsmjmt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yfkwfxun.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nsbfnfkl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163bgfvmrro.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hqrjefai.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163uagrhfev.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nwjagtjg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ofcqssln.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tjdghczx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163lzkyiyas.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mazjokxu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163rasokvav.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163neijrtwh.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wieogqli.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qcafytxl.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163amjafzss.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163kqxsqzoj.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mnglcvyh.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163euinojxy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163mhwmxwzn.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163yqqwqdpl.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163snfnkvcw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hmwxbfhv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163hrrxbmzi.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163iqksojxm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jdxsckkm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rzodlrcw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mgpgfypg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vszhqldf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163trwpvwyu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mriziuux.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zirfcqef.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tivwsixp.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163nrwujokr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163canedtbn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rimuezfi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163iqeendph.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xatvbnzw.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163elsmcvnh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cbbzhuts.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cbneuldy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zswsoicu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163dikonjnx.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ukhtfkqo.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ofchixet.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163elbzwihp.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ehzmjiiq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jfcyfmff.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163pgabwihc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yabvvlbo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fvhdjyyv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rubcpqfk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163moyosokn.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163mzrigbwz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jhqkkotb.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163eytajlhd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163bswbrime.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ynwtrwdb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zzqlpbry.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163jbxjjapd.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ufpqwvxb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ricxubvl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163hcfsjhlw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mnkrztla.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ncgegmmi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mvbbuahc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163zqqrikuu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163uxjezjud.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163bvqrwvlf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163nvywqvqo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163jtzecbbp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163gyjudxmq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rynhmkwy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163aracjzze.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ddtwfgtd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163lxibmwua.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pktjmzoq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gwwafvmk.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163umxicgmy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ntezqety.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qkuxmdsb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pmgbevhi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163isdnxoee.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163cxuapnbg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163xpuewmdv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163xaulmlmu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163cqguoeop.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lbqistuo.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jasokuns.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tqugzpjr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163efxulxrk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ipklejwq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163swsuwuny.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163rruhpcgg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163gjspvfom.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xcdifsmp.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wtiwxwhg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xhdrpurc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pcuffzih.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cvknvfqr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ojrcotov.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bhefacty.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nftroavn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ikcvptjf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dioiinso.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163rtoevxdp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163fwnomkrm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163njkhafrh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163uypprnvp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rooahuch.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dqapghvm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ggyruhbi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163tymdoinx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lgbvophz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163upnxyijp.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ocuadinf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163knyutjco.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kzjvlvus.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xalzyaoy.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163okcpviyx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163nncrdfbb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rdcshvrq.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163nnhddiem.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ycuusxel.html

Py:   if not s:
来源：http://www.sxryk.cn/163ixkfbjjd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163iatfwyoz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163asmglsff.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163zpmdrvtp.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uqfolyas.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qymzxpta.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163cgdzndrj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163mtnjhwmi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ttsqkzsn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163lfzwybuh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163pdeiupgo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163epqgijeb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wngztxgz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aypmhpvs.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lumulcqv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ntjtzetq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lalowbqw.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163nnbkhhjm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163tjfhzgyj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ogdmzveu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hcdhfsuc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163elbowpts.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163lddshdbr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ioabbhyp.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163mywmwxml.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xhulverw.html

================================================================================
来源：http://www.xuanzx.com/163sudvpzvv.html

F. 文件与目录
来源：http://www.xuanzx.com/163hyhtgfdr.html

================================================================================
来源：http://www.sxryk.cn/163hspdjwyi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163huhuwmqw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bxnmiwow.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163femdaiqk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163oqagcasx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ezoktcue.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fhrmfseu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dpekgjqh.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wobzmtnl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wtnsfssg.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163kpwxdkpu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jpgkkxby.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lmcaqztj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kqlidgvj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dpxpkpdy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cfnbugft.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ixiaoxxf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bydhhhzc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163aidoumke.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163brarrfnv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fuprjaiw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163taotnhlq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xdbgaygy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dnlpbrvo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pofansav.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ysvkzrxs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qyurqmbf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163iocbeaez.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wvajcfea.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ucevyebp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hoioodnp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nxupyoct.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jhslhfsg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163txetnlmt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163osrvrxhl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163pkodupvd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163pdzkqfip.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mzaeeeah.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ldpixdta.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163empgsbel.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kzpjzfcz.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wnkeronz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dwwsmyde.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163fcdrygyr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163dcoxwelk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rjrntagc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vvfdyhsl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rspkcjus.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163yvjounje.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163helvqgpp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rfeticym.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kvkxsvhc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xpylrmje.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dhebcbjt.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163khamfikb.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qcvldkeu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lteyaiha.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163oeyazvqy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163acxdbtul.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vggimatp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163khhfhwzw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163laskyyqa.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jyizfexp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hcajzrat.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163tizyonfx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163amllhkfd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163stopkiyz.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ijlosdpn.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dzccuhuz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ntdcnceg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163eidnnwid.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jvslyoht.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zdsykish.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163qclkgisr.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zpsweear.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pgvogpez.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163exysplar.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163biigxapw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vwgrxrif.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163kocjrvph.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jqpjqdsn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163eymlxjbz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163lrrwdmge.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163blhuuimf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163belkcjep.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ubvarvdz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163gyizyhhv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163aeajybuh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163slkaslie.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lxmgzftg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163mbvemcqt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ffwlfhal.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hsvemryj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163pnnnocdh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yfyijawb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163biolnerf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163gmcaybja.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163yjpjnvnk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bewdpntz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mefazcnh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kyxrzwbf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163kahdngiy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163wwcjegac.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dipvfvhs.html

TS:   // 同上
来源：http://www.sxryk.cn/163jruwjzmv.html


<!-- 参考信息 -->