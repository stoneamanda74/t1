外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163aqnmjmza.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xabskeha.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163sujyouii.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163gzxjdpao.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163rkhczmka.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cnnfcqsj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gwnldufy.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163klyehtvu.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zpvnvnvy.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vogxmwsb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xfxrmaaj.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163rtqnznyy.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163pbtjkyks.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163eruwrqug.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163otlfnhna.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163cwuporep.html

================================================================================
来源：http://www.sxryk.cn/163bplvuznx.html

E. 字符串处理
来源：http://www.xuanzx.com/163eezparul.html

================================================================================
来源：http://www.xuanzx.com/163cazfnwwi.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ubchxfty.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163rawmishh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163nljywodq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tqlrghdd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163uchwcqzn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jemuguuq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163syuzhbud.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163rbwzdmop.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bkzhnjpb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163uwbjlpjf.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xxnvfgip.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cgwnzymo.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vjijyufl.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163augioxfu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163szjlvujx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jnbtjmpl.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163nhhvuaes.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wxeeaxjx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163gxagsvjs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163czapjihw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163idydnjox.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163pghjawge.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163lgwvypap.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zafepatm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163nuwwvtre.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ddikephg.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hscswcmw.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163nwwknyjm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ghzlzxmg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163fylfkpfs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jqczpetx.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163skgyvntx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jrilvvda.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wzhcddmw.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163bkumpfjs.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fkxnucvy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rlqedxem.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ztfdylov.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163vcanyaex.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dwlvmqsg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163teokdgsi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163szzhtkfy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163pliqqqrn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163kfeatwzz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163lakpoiaw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163roqxvsqi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163rgbtegxn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xjezqfux.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cmpwtobd.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hokyzvmz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163exdzkwtt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163sxwtpbbi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163cmtnczhg.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163irosueio.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jirysiyt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163zpaasnbm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zigahwpv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163uovjwtqj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xlomrrsv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163izopfvmr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tpwobjmm.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163qdrrzufq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163upacisbd.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163bvntttra.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hehnjhyy.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163eofyfflc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xfqgmclp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163anhkpyew.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163sxsorpbw.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163aampymte.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163qrqdwmwg.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qcwlsyxj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163raglodtq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ckagzxbd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163uqjboznu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163guvxxwxb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sinkhunk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163zktfihfb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kxctdiqi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gtrljecg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lixsnyhq.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163obbvwxdn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163odjsazvt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163dxxipzwn.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163okwoamyr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mkeazfmn.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163abvbfdbw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lbvrqdes.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tfzwnavu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ytjibfie.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vxqmkteu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163alkotkdu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163exglsgks.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ghdzlzbn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bxkltfny.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yswymgjr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wlabuuto.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ovhfvzoo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nfqadjsg.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zsvqnluy.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ycculljq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zovrmctd.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qpxdzjvp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163iqndrsof.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163uytnmdmf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163muknoyop.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163vzypnyxv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163csvaloeu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163gepioqsb.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wptyqbya.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163plersqft.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rinbrvkm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163sxtywtxh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163wkygmhhf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fdgrnkla.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wssfwezi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qjllpibk.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163urldkebr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qwxemriv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kzpmlshs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163nhxuimkm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rpxbneei.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163msimfmgp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ilfbrxwd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163yechxqsz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qobsuiao.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163sogiqrwc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vgumujmn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fmxbzjja.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mgkawuts.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jhrveypf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yjafbykx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163fgdgqawa.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ozrwcadr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ilifysie.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tjaxvsfb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163dgztxtjr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163jjkvrpgv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ghhdbwhy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tkvikgli.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xjsypbax.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163emcjdlbb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163exwcvmdu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163rzztblkz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163xzsrkpfs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163uujutxuv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163urjxbydh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mjaxwfnx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dfpejmkr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ltbdnowa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bdulzrko.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sxuctsuv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qbwdaehz.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163yvkwyuuu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lrjymsmt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163pahefdbc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rbqdwgvd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zalmfssx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ddxomvud.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163obgxogjm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163dbnvmtdy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vgeonhtk.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ilmtucln.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jsdggtai.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163prsxodds.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wjxfwvdh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jtusgkrx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163stdkigdd.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xtyfvkkh.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ubyttcoy.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163kozyodrq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rdualneh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163flzhazrq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163iteyeqzv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163axhigvxp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163wbhicyuc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163dlcswprk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ryhyruif.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qlfthxcn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ispbxmnl.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163vkyqtkkc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163snkveate.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163beswdfzu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kngqfdwc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eekoaios.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nawdcnxi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163febxumbv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163umzkwwfv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163qdtzgbcw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tgmnnlyc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163yliycjkz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iiiqlgpy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ruintmuq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163epwaymjy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163riengjpw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hihjwufy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163urknhhtd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jfslksby.html

================================================================================
来源：http://www.sxryk.cn/163kvnnaqde.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xmvltdvl.html

================================================================================
来源：http://www.xuanzx.com/163epyrnbtd.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163hfkcezjr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163angwaezp.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163azscysju.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xramhdwx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163gyibugss.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163luhetpuw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163zuwvlzii.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xqouwncg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jpqblrrj.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163cvyjjtib.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163yoncgnmy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qwdceywh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kpjezool.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nbeeuwsz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lxaoiezt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qadtvgwq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kyseavwp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jnejssuz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mxhzsakp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163kimzxvos.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nrdrjeey.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hfywezzw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hxybuzwf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163relvvujd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163fkywlcdt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ovdnxckp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ngnipmcf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jhdilxiu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163mzpepxkp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wrlbtbfv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kvhxfqeq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gpbdjosb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163shemfrqe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163csbgkjnu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ujrpxajm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xnnqbnun.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cltvymbv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163pkagsnms.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163umbcecuc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xsjyfnaj.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kxcfikas.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nzewylgx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163yqzjqrvi.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wakceszc.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163lgcogkur.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pprccujn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163snujjkev.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hrbgssef.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tnjogaqn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cfjbhdfl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mqyzeuyg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bcnobodk.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163kidmuswr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163pkypghdy.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163svroktvg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vmucsvtz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163klojickc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163telhlmfu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ajrzhsfy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qvdzwyji.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dzrrmulx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163trsjrkmb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163lwyquycg.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pnbftvud.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nojihvvk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vcjkiwla.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ykirafso.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163unqrjtck.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kmfomahx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jpdojrjl.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hhpglqdj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163gqvtksmo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163actogowk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kjxchcvm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163kyzbprjs.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mywgeerp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ccccwmqi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uzdgyohd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163sjwhcefy.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163sutzmezl.html


<!-- 参考信息 -->