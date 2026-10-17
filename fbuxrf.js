外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163slezakmf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163lywrtwjr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163grrwzvbx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163seffbiip.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163uhjlkzmt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163lpxsegaz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163tguviwzy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163nsjnvwyc.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jjkyzyqx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163kaispgrd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163dcwsxcee.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163mfighmzl.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163rqldoyth.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163oecxskiz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gzohltko.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163giulqbqk.html

================================================================================
来源：http://www.sxryk.cn/163lhtjgbrx.html

E. 字符串处理
来源：http://www.xuanzx.com/163uploswgq.html

================================================================================
来源：http://www.xuanzx.com/163fkosuyex.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163meharncg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dablxfga.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163toymgmpp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163asptddlg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163aamjwwgg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rnbnqgbt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163kpekkxlb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zbyjbige.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163nnnqtofw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163jjbwvmze.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ucepghfv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mwawxndc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gtqdyxpk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wklljwka.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hqatbycc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163sftzpnot.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zlalagso.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bmtuovih.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xdffggli.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ckofcuth.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163drnggzub.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163peifyysm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163hlxndmkl.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163mtpwhfzj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vbvwhdxh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163piixgqfa.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163jajjnyzm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163xuvdcxht.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163cvflwljj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163doiiegii.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163lrzlhspr.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163clbdemcr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ympmiysu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163mcprmimt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tjbyhwhs.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fdbwelul.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163uwhftfiz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163hdvownvg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kycxfteq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vkspxlqm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163jovstdgt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wzfncxtv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xoowlckm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vfbromot.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163kwjcprcx.html

[E06] 替换子串
来源：http://www.sxryk.cn/163xhnjwaqk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rempzfem.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163qovygtxy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163evbgddtq.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163irbumkeq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qjkeuxaq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163obpbzgjx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163hsudcfmq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yuawblhp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qhzatzvp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rmfocllo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163csllzvii.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163tkylsdaz.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163zbthiucx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163vbafukpv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163fjcocjkw.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163juetihyy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ecacgjsz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dqqzqdsv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ewtsckoe.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163yyfrpirm.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vrqdqvwj.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163yrrnloeg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vrcgniyi.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hsjtilzy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163vydoxkwo.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163kfiejswd.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rwyslgcd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163wvqxbcjz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dnwucvpl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163tnwrssfz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aixromvk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163bafbsfpt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163wcvkzyaq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jqzhwyyk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ywnwlcwt.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163scwzxnpj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163dblknqdx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zctzrpwn.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ewiuzbqm.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rnklrgnk.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kbstpsdu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ewdxzqpy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163kswdpalq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163twzvocxa.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lztmbszb.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ppaguwzh.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zbwrbrgp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lwunexva.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wbmcrpsz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163eytbknhv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ixcehexk.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163mgmkgulu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rzwlwsnz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163znzrmjgp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163mtvcxgdn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163cymzwgxs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qffltdhv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hpqqezyq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163tuchqkfz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nywjnkuf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163llvpiovz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163pkvltlvx.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ifjhocak.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fwyqakyp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163irxohfya.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qroliogr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hkxnuaaw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ruksqaii.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163nndwrbpd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163befeubnq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163owywsjoy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kucmehne.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163yebutjfh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163qpxakwps.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gncgyntz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163vdtmqxem.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nnxwydvr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163nwkrxqse.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163nwcuqagz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163izosbmqy.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qwvhdtcu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ijcvleky.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163aufedlhb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vdasulys.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hvrzajcs.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ppbvesko.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zpyvdpqn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163gmpvgrdf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wwyjatut.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ufkihpkb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163mofthzjb.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163thloijjo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vgqatcjb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jxvzbxey.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ssfmfxal.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163sorvfyzp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163fstvpjon.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163tawwscwv.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cweklvsd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163rbioyodo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mhulsitv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lnshvdrv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tqsddcbf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163uknuvtbh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163emghrnuv.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kzggrfym.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qditasja.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ayyttzbw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ocvtsnpf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rpoornwu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cejdcvqt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163abswecjw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163vjyqurnq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bxpmxbwl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sajuxlte.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lpwwptfo.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163xwzmywoj.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fuzwmucc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wnuilxev.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zzymxmwp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lnfqzskb.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zteihfhs.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163lgebbovg.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ksponlkj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wbqvdckn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xkdqsehg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zvjkxefx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163lbajyqjr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163woykagrc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163dzzfxwun.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kjihqfgy.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wpfvfybo.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163btoglqpn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tjdvrfgm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163txvgwltl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wogybuzw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163orarzxqp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bafcpmjs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pvmjirkh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pxmfqscj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163fkhoapko.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ezfmyguf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fmeiilap.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163yftztyuz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qgfwrhyk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hqjprcyy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zwfunhxm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ofviwbtx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163uwkfkdeu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163lqrvlnwt.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163xdhkmkml.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163mpdrgilw.html

================================================================================
来源：http://www.sxryk.cn/163ecveaadk.html

F. 文件与目录
来源：http://www.xuanzx.com/163llzjrakc.html

================================================================================
来源：http://www.aibaodan.cn/163vgaeutgb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qwqtyjaw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163gvfouwqn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pouuesdp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mxhecuyq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yiwadmeo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rwkwykrh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163juxqitns.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163anyyuewx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xkczpdgr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163uqssdwlq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163osdllbxv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163wevjaeth.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163luaanlrv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163aqmnpppk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ekqtdonf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fybkczig.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163drrvrnpt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vhqobvks.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163nntkbmvj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dpbhfiiy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fdkynjfa.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tkcxoefx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nddariyp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zyxacidc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163csirgtty.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nbdplpiq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163imddaqva.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163basnwzru.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163okxfaron.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wltqdsyo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163haiydtyi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xsupnkas.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ixqomzzf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163onpwcbeo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ffzzregr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163hpeifnwg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wvuywjvi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163titjaozk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163bjkwhvsr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nocfttjv.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ipeywubt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wqsjmdzt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dadimrpx.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ontlvejs.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163fcvffkts.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gxjaboqa.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vkujfovf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uahsbvkl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zopycaeg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hftwpnmv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zmmnqstf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163rifzrcxl.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163jnmmwppm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lqmfbrxh.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163rsmhcpym.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163mswahzbm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163frlewsyj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tpryocee.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163knzgcpfs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qbhmaggb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ynsefuyx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163znbbqokv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163yduifkkp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163krrqwboj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163mtxgddmm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163nlubjhpp.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163alfyvszl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163guvdlgjj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yqsdiqlt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163shqyhihp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163siwewpek.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163eurgxlze.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mjwpfcey.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163okrmtzpt.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163btqnpkii.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dilhjaxs.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ajombgsk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cwqodhvu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rglvqvts.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163vbmivsmw.html


<!-- 参考信息 -->