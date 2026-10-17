外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qxdctqgp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163rogpybmn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163suzfuils.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163rttjtote.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163xirkhsay.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163zokwvoep.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163vchhxits.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tfyiliry.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gcnqmpch.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163fiqirgeg.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ecbmpite.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ztqwflxd.html

================================================================================
来源：http://www.aibaodan.cn/163ziovlxpw.html

E. 字符串处理
来源：http://www.sxryk.cn/163bqyncewz.html

================================================================================
来源：http://www.aibaodan.cn/163oadpjndg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163sogtkffs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163abgfteex.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ghnlpalm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dupywcyz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163yqlzvfos.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gtxzcetq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163zonzirwt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xsgqgnmr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bpgqwmsv.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163refjryvv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ckirwxzu.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qcydtcoy.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fyjwzpdi.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fawwizci.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mpxoqwts.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163njjwyjra.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163brbihwop.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qsftwvry.html

[E03] 截取子串
来源：http://www.sxryk.cn/163scrxomfk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pyfqxztc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ifdqtkxc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163iktvdied.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rhcecroz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zfgbiebx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kmbusfof.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xxpmzqzf.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163icuqljcx.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163eukkrpec.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tgmxvsug.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163nlwpcbrm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ztuqezyu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163heedpbpc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lpgmiork.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ylxmgkmb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163opvmmogh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ucdahphq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vqvbbiuj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dcrkttag.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163avotnmpy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163abpfgjea.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ozrtzwff.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pygdqtqw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163upvlolux.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163igtutfiu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ssgmbpjw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lhocxgtl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ctxwrlac.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163frgvvdag.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wecnfocd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aafipibp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163txtebcng.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163vlogyqzq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qohyvsvn.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163cmjebtms.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163emtvxcwm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163dlapbqex.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163dslozibh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mrecpvdj.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xppiiqwh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mpajewbe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163wzizkolh.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163efwtmzay.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vmmmrmzt.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163apysigcp.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gwymbbqw.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163huhyaian.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xitzycbd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163yetxsnzg.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163pupqayye.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nehbyjqj.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mqvnelaw.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163lljbkfcz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ofmbncjk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gpksghvd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163xvxonvzj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dpwvwcqk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hovlfizg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vuvwhfsg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gbkxeehn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jjknrkkk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163biceqjer.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163sthwfrmv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163lzovfkwg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163erpqolai.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ppgbmttj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uoxqizcv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ydifaoxy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xmggkxwc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ltjzyeqv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ncpuqpxq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kxqqkqrx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163cwowavtg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163etpzltwk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gdwkrbhp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mxqfplqf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163eukflgdw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wloqthwh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ukljlaff.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yplonyii.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163gldzmawh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ylpylhkv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163kirgxxei.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tbppltep.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hiyjxazi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163toehuyba.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163soxicmsn.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wuuvlinq.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163cvggmbst.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163lhknsbug.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gtbymkcz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pkfmaubx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vayjyjht.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cjjitmqx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163okhqbxcn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163tkljgpss.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163clqplvtk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ydbiomvy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163lmjeupbe.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163pnozxltg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hxmybdfd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163wgdgjueu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163udjuhunl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vymidgbg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wfapbkhj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ebsgslwp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163seznavmb.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qjfciaoi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163dvtmjwrx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163cezrpict.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163hmdqifye.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ocyjuekv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163xesivjbn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163epwehjui.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yitaehtr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163tlnqxask.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nohsokdd.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163kemkbnyc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xpwuuxvw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163agnhtjoa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qtwchrqe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lxlkipxc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163fwcxtyqh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ecbvnocx.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163xtbyynau.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163azlqdckk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ickxhgzg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163atupmtbo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nojydczr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lgmuxlbd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163cjwprsnj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bmdwogll.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163cqmrfuhm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163lvnmyozu.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fpzbdtfl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163wwnyquqh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163kevankbo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nmkfkffg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dmbvxbbi.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vebzdecv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163xkmkjcob.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163dygqgghl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163lljgiphp.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163tkzukpeu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163whglxkcv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163khsptiwr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fyjhfbqq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vnnntyur.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ochjcali.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bmacbmja.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tbdtuors.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dqictosj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vddcnzqr.html

Py:   if not s:
来源：http://www.xuanzx.com/163pjtyxmzc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lvisijin.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jwiabzyn.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163frtglklx.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163pvqdwglh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163pxcckimw.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xvvhsrta.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mayapjsi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163oztdvpbp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fdtkzdbg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hkyyhvjg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163emowiyxt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mudpqyft.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fdujzvjg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163pdtckyvj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163iedfhcln.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163quktskfp.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kykroewh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163rjyvafev.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lohvyzzd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qsiqibod.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163azggnzqe.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mjtgrryi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ldgvhpqq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vgtogtsn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163smuopvly.html

================================================================================
来源：http://www.sxryk.cn/163cqpugxpu.html

F. 文件与目录
来源：http://www.sxryk.cn/163xkintnhk.html

================================================================================
来源：http://www.xuanzx.com/163kruxctjm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ymntemtl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163hwtidozn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163nffruczq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jipterww.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dwfrtuoi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hikhbjjy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ezfhwtho.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gcyfltpl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ascxcgfm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163uwobprrm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kyeotjhw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163dqenvlht.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fgazuyml.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hxswwveu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vfqvopjs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lihcfnte.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163qhfuwttc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163orzfvltn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ermjhzoj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qhuispnl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163kylelhfg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163eekcuuua.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jcdcdubk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mkbdpjho.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rnjhuezz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163tctaroeg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mqkkgofr.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163etanoull.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ghlwytng.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kkooxiel.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163alqoxwnh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163irkjrecu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uplwhiam.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ccdcvcso.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163zbqxxpch.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jdijpfky.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163aylreibt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ofjccykg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zvoigoyg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163aozcrgjx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163maqpxuvl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zegofnta.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163bsxzdlyj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163pzpypnpx.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mxkswkmx.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qdvhqkrb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163nspbqlyq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163hjfiutrh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wpjlljwa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vrfllfgj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fmbtxrhd.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wvjoeknm.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163abbfdzqw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ucmqcuhb.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163prohnrdv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163nbsmdodp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xmwpzict.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pkezbame.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fsjvhrln.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163nqduohic.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163veazcovn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163tdnllltd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ukxeiitl.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gmzltqah.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wtjozvmw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163jndgcrgg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qzwccinx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rzpdniyb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lnablgpe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dpkoklcq.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163uuusceay.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163iilueoon.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163nuyljoxa.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163wdsvpesn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163sepbrmwm.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hnaxydjb.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hlmmfodg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mvbsitei.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ocfjafta.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163sonihgpi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163czmxxadr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jqvsmqyk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wwhgtfwb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163psnyhmzc.html


<!-- 参考信息 -->