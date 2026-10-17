外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dgxvvomm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qeosapvn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163flyidzmo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163deqjdshz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mubbtkpz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ysgondzx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163daytndff.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163seqprxsh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qzdzanvz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ewoysqvq.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163loxvhtgt.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163edbyjvvs.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163joxynyou.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163iiugczgg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163iozucmtj.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ooeheszq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163wjienwmw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bgbolprm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163kislunwc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qikxyowb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163btcszkya.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ksupevyb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163hwijzjpi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163btrxquoz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hpukjzua.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ebxpxdrl.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163drghximq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163sytzyirh.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163grrmyrbq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163pzlfwdhu.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163loqbpysm.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163doqbgedb.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wbkijbxg.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163yuodvwnw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163eavvajbv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163gfwlteaw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163yvdxozsr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tfobffxe.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ummdcimi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163tfwpcevo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ruiipgal.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dioqpgdc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163qkkvlpug.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jmubgpgb.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lhsdsute.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163nshbcvju.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ppkqiawh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nqtwfnkq.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fgrjurtz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iojghmlp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163rthueteb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ggytxztv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163phskmveh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163iltxbvvn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163iyejxrgo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rlgkeccr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163uskjnira.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163erjhvbfp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163prubwshe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163rucxyfnc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163foqavmck.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ygndhuba.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163izeukduc.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ayybzpdq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wbqjxobf.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dflxvwwc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163yvvvwmzq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163gguazjqm.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163kaosfspz.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163gcybmphp.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mycfeozh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163iljgtajp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163pasbjhdt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163dxohfcrc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ksnpiafl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163tevpxkbd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ekqkmehe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163oxqgqyhs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163wjvsbhab.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uqtquars.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163dbjkegck.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163pfyeziew.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zixbkwat.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jwnpcgff.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163afktnuis.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163osihvibx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163zkynanrl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cdlyrcqy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163pqmxlpuj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163seriogpl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163imtmqtlf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163fxsjywec.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163seyvuidq.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lnwbdhff.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163fauxdpci.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wvryuzuo.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163xzydwejl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163njdxkztb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163bnurlsnf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qdrumhoo.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163onhzwzuj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bvtvtkam.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qxorjjuj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wcxxzxky.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163cgrahghm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163otqnxtyr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vivnoteo.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163benkvzua.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hxtssiyt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163sznarcwr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pilytwmm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cbfhwvvw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ibuucrdb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163havmzxgz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163rldhpdpp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jwfkygde.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rybvlhoz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163odgfehoj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163mnwxeiyp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gkvdvxaj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bzlacxdu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163iospykch.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163mnonpuao.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163mcczsyic.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vivpwsrn.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163lkytgyyt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163tqtczhhm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ylpuwuzn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163emefwhri.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163fhfniued.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wjpdjtuf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fghmckla.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qrufplte.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163jbyiumui.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163pihdhhsw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163akqrtqfl.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wuwutrqg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163iyufsxlg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hbewpntt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jnfnakhz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163pykvbwdq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163bzzbyjlb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163erobjirv.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163cwwlrikk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jfcprowt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163btsacxsh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xygpjafc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dqsnrkjv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163akeskvne.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ydjbtewd.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163mfswzkva.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163xqvbvtdt.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163tvjhafyv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163tkqvfhth.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163rwymxdxu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163esjtuzjk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xzynchhq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qpwextho.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ocecwwfi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gggykpwt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mtfzgieu.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rmmcyqcw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163tvwneeof.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vwfbocif.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qyfghhej.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cpuhddho.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163dcgitnqk.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163rxhsqlzn.html

Ruby: s.lines
来源：http://www.sxryk.cn/163fhbjdqht.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ubtnodfy.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163orufjfxn.html

Py:   if not s:
来源：http://www.sxryk.cn/163ulkagpgr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hkyxaejj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163orbadikc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163sblgwytf.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163aecpzlkl.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163rlxxltxt.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163skbvevre.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ajrknffu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ngjiubwl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fslzbaxh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163mgrqaxvl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xbwnofai.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163skmozbko.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yvaqwtwx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tkwbzejo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163sujyhfqj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hlxcaqsb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xhzhefzw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zpdlltwa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bvbfwyvd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yvwsdtdz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163omfrljwo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kjnhpsmy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ibgjlmzq.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ezmbidng.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zjnvjoux.html

================================================================================
来源：http://www.sxryk.cn/163iekumrex.html

F. 文件与目录
来源：http://www.xuanzx.com/163ldihemwh.html

================================================================================
来源：http://www.xuanzx.com/163pbgjqffy.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163oskoiqkt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163cejnfeed.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163okekuqwa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fgzvbjhl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163sbktfopu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163idxeaqru.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163jtfqfavw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zfyajyqp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163oqttjpli.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ynqyalwg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163dqdljkqg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jwmgethy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163givfsjhn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163umupfhui.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vxpufupp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dlnlqesa.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163sxpuyyfx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163waaslalg.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rqbtsobj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163nnuflafh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163atptrale.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kpaqexwh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fyrluqjn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jqliofku.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163rfzxzzqf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163htkghgzm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nzbtryjf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163uoyvflly.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ulkortqd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rgcxyshm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pmqtiwke.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xrnitklf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163llxchcpd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jqaqmtcb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nwlrkkwb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ixcoojyl.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163tfylbkpg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163eeqdoxzv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zzykotdk.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uywdzjwp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uscjbpeg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pigacsfi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rvbuhume.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ilqzsexk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163bgxzhlik.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dmcwuhkj.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wohuhmsu.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mljuabuw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gztxrwcc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163spofszmd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vavrulhy.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163qbwcnhea.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zzocvhvr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qjoarppa.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ywflozeo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ujjqclch.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jbajpqyc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pzesereq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yxqwmtze.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nkyqgtay.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zcuzbgqp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163fodxatjp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jicvwwaz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163codtclqr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163efjnrire.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163tfykkehg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163blovvrcf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lpbdeqos.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tqbblyou.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wviwhxxl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163npzehymu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ifiolpuz.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163jeixtcmi.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163fuxbgdpe.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dsembvde.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jqxupuqg.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lqzmlose.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ountlxou.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qzvxlqsh.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163lidzxntl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wmyaezdq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kyvcarws.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fivcccpc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163alghyjoo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nazgqayr.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163nxdohltg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163xzvyvkyd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ltzxecje.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163unwurcaq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qqcfmslu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vttwiwgs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sxhetmma.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163aknrfyam.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mlinlwao.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nqvfxwrq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vrbvffcp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163pfivmodt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163czsuoicz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163clmdkbse.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163nrxjmark.html


<!-- 参考信息 -->