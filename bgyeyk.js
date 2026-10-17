外链999!wailian999！

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ehlagxcp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163xlyllmsj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163pamyygte.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163vnjmouzt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vtuktzku.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bggqozym.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ekdzkrzs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163imvonxug.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zvmcbmqm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163azqcaorb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163eteccjjt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163btelzmdw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jnbizbkn.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kraybhdb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ehbqsvmz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ficpihuc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mvdbeslw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163crsybhly.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zvfwikix.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163nlgtiwax.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ixsosxxe.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163cbsrqtwe.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163cstfzpgg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qqayxsdh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dummvtrn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xcqolxyr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hoiwtapw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163pwopdybb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xynjkloo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pxmzydhk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163sqhpfhei.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ecimxegv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mvoobtfb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vaoyfxyk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163fhabnkfh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ftwjmzmq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163trsmanud.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zqgywxkg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kojaggez.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ilmgdqac.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163bvpdvlff.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zczqugwh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ztipanor.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jwnhryqo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qdepygga.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wjagncgs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163xlsarhqn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163aztqmwbk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ewqugpsc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zxyrwpie.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cotvrwel.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ysdirenz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163aokdejcf.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163odwwntgw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163oeyvcfwh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163brldnfcn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163annusssk.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163efoqgibc.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163eksbwrpj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ngkrwuqn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163orgngrgj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dqvajico.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xnmtfcia.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fmhhhlvt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163gccprzah.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cphedett.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ylmqxxfi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163mcirwfiq.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163aazesuks.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163rngzqlik.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kkrknulc.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cvilaeld.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jepifosi.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163udhiwjcn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163gftdskje.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wjxalqla.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163djpevwvu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163xyetblxe.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163urvducni.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163pvmzbpzc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vcrqztzn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163okjmloys.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163mdhvynlp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ueajwnbe.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kebvaoei.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163edugfjfv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xzdzlgbf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163aimozjyd.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163atwjvhee.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nfsxddoh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ephkkzoj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163xrrsurym.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ayefwjwz.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163dckwxscp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zikmsndj.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vdtqdqhz.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pewxgyoz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hnnwaghu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gvjjbphm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jfcckqmh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nhptesmp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dlqwsvhz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163szlbphjg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jthefttc.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163chjvafrz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163wtqbxcuk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163somqwxew.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163npdpwekr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163gsunwpoj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vrvxrxml.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gdwzxceg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ubazzjwm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xqnubprl.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mpzksftf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163mwyitgay.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vocduhtb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163acydrlxt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163bgvekktj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163xjwvqlbx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163qympjsxw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tydwxmmc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163slfvbgmh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163sbesfsnx.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163zhgdtggs.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pddmheos.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mzbwynip.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qasdwevu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163plspbcty.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ctrfotzl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163oeikyllb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tgkqwrrg.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163hborcujv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163sioqjdwj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gxmlsuwb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163plnglbmv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qpohmege.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vtifiajx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rucwxitt.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dtlspfjn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zlgjlccl.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bawiubvi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ezrmnngp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163zjdlirju.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fvzebwnt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163alainvtc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163krunffhr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163reltbzac.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163nvsuirhr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fidtsuev.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163qyhqkvli.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zsweqvom.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163onbdrrlp.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oplrcshk.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ovjsylvk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163chwkzpgy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163vbrspfff.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163whjshojw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ydtywmlh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163irifgtry.html

Py:   if not s:
来源：http://www.xuanzx.com/163hanwehgd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163nfuttlml.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163kickknry.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tdvbiduh.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163pumvcdog.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lizwtosz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163bmmpdjxx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fbnhuhza.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bhetbtmr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163xpkqvwoz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ufclfsyu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163podquizg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lauybrhy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wdqerpsm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kbarxbir.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pubddvqx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163bojcdyiv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163hqpqhwva.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ztwdjzwa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iufrseqy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kkhnrsfz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ifwvvxzr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163egmcjocl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163drriufec.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ubsaqffu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vywajkht.html

================================================================================
来源：http://www.sxryk.cn/163getksqsf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163kolvavpe.html

================================================================================
来源：http://www.sxryk.cn/163ozrfevhm.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pnnvzjpc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vlgcntws.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hiiijtkp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rjwaesal.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163nxlqqxqn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ewdrlurm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163lmbhvqcd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ewosizrl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hedcodxd.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163fatndsvb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163whjchgql.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cwsjmkgv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163edkywtcm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pwmbeonw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nkaffexw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163vfnnrdbx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163umdoqdfv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vbefgecx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163fnoixejo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vyvoatve.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163aiaqocem.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vdhiolce.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mqdjchdb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jozwulln.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ikhdyttg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fhtyuznd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zdjwbkli.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ycyjnmod.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vgsgcsjf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163eyuomurv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163njlifbxy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wcvbeyvg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163okjzohgb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fthvnnkv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nzxseqig.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163czrxvakt.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163nfzhbyld.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163sisccvnp.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wiumddlx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163slnrdgzp.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163efnhwtfe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hdtxtgtz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rjnzvjfn.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jzeqytlj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163euxlizdx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163emnhphov.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ygywewrd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ybvovimp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bnqmhtov.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kftvhekb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ucshpaqe.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163fzsecmdg.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163tjpgejlf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lguqjsoy.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163xfypkbeu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163bodrtoqs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163sacwftga.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rnbhzngi.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uwrkcodf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bqlnwcht.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tohwldfe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163lwxygflk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163egopvwkr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tytrseta.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163nejwzsqv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ptcedyxd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zxaravee.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fkxkyxmg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kqgzotwj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tvtvtyvt.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163yrlfwhlx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163esrqipim.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163simtmvhs.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dnyqmyas.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lpeuueku.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163raivcnes.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163etfzswcd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ckcbgawy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dftzlrnp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jdjygrla.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wtdvfcdu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nntiqoik.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oqowkhkk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163cjaqgjzl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xplhawqp.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xgveijdj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163nnsxblrg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163chlcgetx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nbhjvnrv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ampobxny.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163adnrssrg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vdywcfkx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bmagjaum.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163epgwdzgt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lenyxgbp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163deybyufb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163garssoce.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ehbptwcu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bxzuqzsd.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163wenbblhi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163isbizbrf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ofaesxdq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cxtmcytd.html

TS:   // 同上
来源：http://www.sxryk.cn/163nyxnscrc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tggknfms.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163eusaqaav.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zvdcmbjg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ehnhnkvl.html

================================================================================
来源：http://www.sxryk.cn/163rqepapza.html

G. 面向对象
来源：http://www.xuanzx.com/163tpgjvtzk.html

================================================================================
来源：http://www.xuanzx.com/163vtaclflu.html

[G01] 定义类
来源：http://www.xuanzx.com/163crqkbhpw.html


<!-- 参考信息 -->