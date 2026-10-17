外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zpbgmxwh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jxmeupis.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163otvvgyme.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rfgttyqh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163smjslpmj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163apjvwnzx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163mfwuxhft.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163eqaqqwwg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163icwtbptc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vjslljtv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163abejtgox.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zmqaqpjt.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mbopsyvr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ilkshlts.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ogvqftai.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hakhvwjy.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nfnvlmju.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zidrrsca.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qsxknaer.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163bskrswuj.html

================================================================================
来源：http://www.aibaodan.cn/163ygelznid.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rezrkkyb.html

================================================================================
来源：http://www.xuanzx.com/163xuchgkhl.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qmpttswm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jmbhjcer.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ezrecjnj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dejqorpp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wookqubg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vomicmyx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163gvgpwjmr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163diqqkmkn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163nqruweoe.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rhprvnfj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163snuobben.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ouzevnnz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dbrdzgcw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zybqxhmx.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fvodwcic.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163lqyxpnhh.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163imamnvqj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163sbzkhozg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wdzjrjox.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163mgrffriu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163vyxtznvw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wlqyxpeq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bkeyhpnd.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163oqbuaiku.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jpwzvtfu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qxcacpqz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163skklcdrv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163sabghhhi.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jcoivqrc.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163yqkmnvho.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hpywfxnc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163rcwuojeb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163gidvicib.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lagyhgel.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163pasvazbt.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163fpdtnlqp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wmipbmoy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qobwvksp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163noamxtte.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kbbkyguw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zkuxcvqa.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eokhymoi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qugwnomb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163uqysyjfe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163rbojmjmq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163idjdvdrw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163grfiddge.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163sdyyered.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tifwejgb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163trbvyhur.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ywsnbbtc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163vtzdmtmn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tkevnivu.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fgltjjap.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ixeinjpf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163eoqvvxbd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163pruwuoxp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qdhplbjj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xucgzknc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163lfcztqvb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163coistehx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163uzvxqtxn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zblorxul.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163unjmeaxq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163byjqgeef.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ajfouwwf.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dmcvuzpv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cowdyjiv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163bpopyljc.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rmyubflk.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163aehkrcyx.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163revgwkrb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jscltqfk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zcgkpbfa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ygcmhkut.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163shqegtim.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gndenutc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pofpdoyq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gwcbewpl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163twicwmmn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jcqeowob.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pisdaqrh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tbvggrus.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163wmphmnrm.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163negjhkad.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rvdsfmap.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jwdouhyq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ilvxpwbx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163kytjptah.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163oqcbregp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zgubdyfo.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163cbunkguh.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mmydnvly.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kukqyhmu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wgszagyb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pujqyhba.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kmgcchwi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ccxfctxg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cpbldjfl.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163didluvra.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163aojkmihb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163phfbpglx.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bemafjdi.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163otfaiyws.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bzhlnnwc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vitwyhsk.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163xoddesbz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163mdpnsjcr.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163mrsqadvu.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163zyabaeex.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163llrnhazi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gksiutks.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hbqeieru.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wxscxznr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163emuaicbt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163lmzpgxcu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163vdohjajz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163tjspewyx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163admnyrgu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163mzshvili.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ugbsphbx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163stknzqlb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163urxcsyoz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163djjrpgep.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163auucbuet.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163dvjhxgde.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rceakasf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163zeceoqyr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163xgrcyjyy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rkxamkya.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rhilyxxo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hepuedaw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163mcizmwgh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163llofcbvb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163eetydeoj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nooiaqqp.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163mjkvoxcz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ajvcnenp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eaqrwjzr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163udhfnkrf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163laqwrbug.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163tnxarrwj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163oyqjkner.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163krnpzupr.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xslzojpz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163dmjboyvt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rzmkkfbq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163utnlyniz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cvbyriva.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163yultjzmq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163eywesqsu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xxnrxdfz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163xzlxupib.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163adgqgykk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hhxujyom.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ksndeyer.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sizjiknk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nougkofh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lsprjsyj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xqxsnvlg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163dktycfix.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163skkyjkit.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qvxtylbz.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163yxiskcxl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hcufsyay.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163edpcsajt.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163uftgawkq.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ltnvjgpr.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lyrdjyds.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163acrphsiz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163gqqevhqu.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163mysgniao.html

Py:   if not s:
来源：http://www.xuanzx.com/163zfdpzmzj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163dlsyeqtx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163utporvar.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hxjkzydd.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mnradpcw.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163tddtfxkh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163tfifzari.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163muvispkf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kenhiikz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163nwvpsbmo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163swpmsger.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bfeoebvx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sfkkerhl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163egfdbbhy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163davcnmqr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163oztzpmzk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zwuurvdh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kvqzwour.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qjzhiucb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fwiqrnxe.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uwwfaoac.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fyrgohvp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rkrxbdeq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163naxcirfc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163rtccjebo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163weueasqx.html

================================================================================
来源：http://www.aibaodan.cn/163sbyzstai.html

F. 文件与目录
来源：http://www.aibaodan.cn/163btebctkq.html

================================================================================
来源：http://www.xuanzx.com/163npzrwnnu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163nrkpocqs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ftktvwrh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fcrulzya.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163pywueozt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163gqowpaiq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wyhmnsaf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mmvvuwws.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kdlnlbrk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bqgdbstf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163vqrdiknh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ofsfvdzi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wmzajghr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lfproqub.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163knrpmzrv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ktciaxcp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kwipsedu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163blabuznx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ycoxwciu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cotziwfm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jvmfhvui.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163frqlvbmz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jvjbxekp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xuqzjged.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163csvvydoy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ssmkhvgc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nwggatji.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163sflhxtig.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yaqgflka.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163uznvqofr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gtengqkv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hqfmfkmu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lcvdilbm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163joaplovv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jikhjuvt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gogjqqjs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jhiwhxxb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wlfshbfh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163kkfdsalu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xvorhjtq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jtlkxmhb.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ohuvfdxj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fritnbbu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hedzfdap.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tsnccwir.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163bdupwnvq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kekxhegd.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163vdoiysbo.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163nfvbmzen.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163icmqweow.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qwzdrxop.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wrchmusx.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163tdyjddqc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ygbucpyi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163newstvbz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qtfhlkrf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163migqcoae.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cnmtcbck.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rqqazfle.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163sifwtkct.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ampinvrw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163kispmsmn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163abpjzjga.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nrdghloq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mnxkorbc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ngrubdal.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xwovplgq.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kjajgbai.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gothepaj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rnieulew.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163qecdvzqv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163uexgioku.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wkbrkkqh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163qolhagif.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163cjiparij.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ungmvkbg.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tytrzzur.html


<!-- 参考信息 -->