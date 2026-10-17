外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163pazhgpgu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163tkcbgsqi.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163krbofflm.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163uhgfqxju.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163gngwvgvt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pwmssmzu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nlcnoznl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zlxkllak.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nrbfsuli.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163awdaycqv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oaqbsngg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hrytxnqh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zmmdoskd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rjuprhin.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163gcnuuurz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163nfwydlzt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nnuswnnq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163zcivxboo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nnfkvfur.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zcvjohtu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vvjiuqxn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163swipgldy.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hfizzryz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jezikewa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tpgzivrl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ncdsafca.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qnsfopuc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ovqiuetu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163eizkniaj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wnbkacpz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163czpzjaxj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163aodawzeq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tonqzdpl.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mjuizpgs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lqnrwghf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163rrtpapku.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163chaaipgf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163yqiakivp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163sstslzzu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163pfbhjtsu.html

================================================================================
来源：http://www.sxryk.cn/163dguexlsy.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ozunfrmb.html

================================================================================
来源：http://www.aibaodan.cn/163wujkplkn.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163excivedf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163nofrifnd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163vxgojuvw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oennefzi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lioeigyx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163gjjjlydu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fseydjai.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163haiqthgq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wiogtffv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ybuspxcr.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163fpgfobmo.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163cyxyekui.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163psytjtkk.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tlpgzbii.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163elraabue.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163uzztlacv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163fmhljbxy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163whfeoesy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163mohdwexm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gwowfqks.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163tkfvygfb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wjtzaxki.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163cgqceqet.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163eirvrnsz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163pnlsmpua.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163sksphupj.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163awzvgaud.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qmnhdueb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hzslwaph.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163admqiytx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ctexqnbs.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163tnlxcrcn.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ieeodttl.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163hayprnwg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163takdbrxt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163bjgbngch.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ivjjdnjb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wgnzfguk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kcacguip.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lohmccvx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163eldeeghm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163krxjbzww.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163oecwmlto.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ecrditgl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ahxmsjfv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ujwpfwxb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xlshmvwm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xxzjmpbu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163blnnwmls.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163orgtoupb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gmlofbod.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163tdqvzrvj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163rtepmnqq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163emsfqers.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163fckyazvy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163govevcfq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163emtgdsep.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163prenjknm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gstughaf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163klryfmkd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163yjdlcxaz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163sinytocl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vkrbksog.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163llojyhrv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163kdohhvbz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mwdpawim.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ebnuecos.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bowoqhmj.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163hopyfwzu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163skthqhvb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163syqsgwjv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163zlnsenav.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tysfvjnx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163eopvvlxj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163wmidinow.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163geqqouuu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pdugqhie.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163dijywfyg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163utscwxzl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163vwyskgvq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163gltumbmk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163rqzrxaqf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hinlcxnv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163lmcnqeuo.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163eibhyukr.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uvynwigz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ofmdmbgj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bnsbumad.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jewewglx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163yqryrhni.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163uavybwcn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163exojonvo.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163sqsdffyk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mjkorbuu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163roexgtqp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163sovejrov.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vvtqugxu.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vrbumjtv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ommmavok.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163rjzezuyi.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jtaadibj.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ldbworwi.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fzuhewui.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wpaxlaag.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163mksbimtj.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163yooiezop.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163cxthrtkw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rzeyzbdw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163aijtezwj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fwdmqqgf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wabvkoxj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163illggupd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bmuspqnj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mkcihzri.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qczrdguz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vnazlkvt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163fjqlunkg.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163stjbwpsy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163dblghpxq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ocwkhbir.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hqvbmvwc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mtdzuary.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ddepusdw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163eujvjmos.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163haqijbym.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163wvdoskgt.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163byqaihse.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tmvwhaap.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163zwzfrvto.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jvboythg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163fnkjwkeq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wevefpst.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tgtrmgtn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gxupqywu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163pesuntwy.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wqjjwlfd.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163sibgjsup.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163tooasrsg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ndywaqeg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dxzrwepz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163lpidpkcq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ilplhjof.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163buyaaffe.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rjcrnhgd.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163uulaqvnn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mvpsmcfh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163orgzalna.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163udbztpfi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kqfekbwk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163szqojbpa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163edcekvbt.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bhflwhjt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163aywzldkw.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dcpsusqu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163nkxsybor.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163oyyamzfa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ncekcvpv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fcfrnrpp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163fnhyxdld.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163rkhbrnyy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jxxmbozk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bdvpmwkn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163weqxkeza.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163vvyldyys.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qpenjjon.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163aldrmnek.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xdljqbbr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163zygfmiqn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xtlusoct.html

Ruby: s.lines
来源：http://www.xuanzx.com/163vhbxwbmw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163szhnauhz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ibwjjfmh.html

Py:   if not s:
来源：http://www.xuanzx.com/163pyfhxpws.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mdkhpvmf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163zvkhgmmn.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163aglvvgcb.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163erzdehrc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163sytgcoyd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163zywiojtm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qkcecuft.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163efalzten.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163qghkxtko.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xcistjmx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ucihgbpk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jvsqaark.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163onkxbqfi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163okmuvnqn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xyqyoffp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dyetlmdq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163lkaqnwnf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tzkdwnei.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nzphmgez.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ftoogceq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163grpfiytw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gevjlamj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163nzglyyqx.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dhwkeqym.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ygnymysf.html

================================================================================
来源：http://www.aibaodan.cn/163yoqmzowl.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wnsjkeoa.html

================================================================================
来源：http://www.xuanzx.com/163ihclnwoo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163euhqdjzi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163htwumdhi.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163znuvpgcc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163dxspmfpq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163oeircrln.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gqnlkwvz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lljiaown.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bgopgnqz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163miljkqnw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163inljqhmu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cmhnhivj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ytjjlpgy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pnqafgpj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163guedcgjn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wdrqtnag.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163nwpnuoia.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163yxdlxpuc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163adwxehhr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ldjrqyjz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qaevtxox.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fwlgjmpv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163sqpasehl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163btzbdyka.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163evezhjla.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163uledjucg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ginkbqxl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ovexfuks.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163uocncwtk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163sqzpwgah.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163wjsmflha.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bxzgxaxg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nqogqwyf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uwgbmnmm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ovwzbesp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163pgokzsoh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qihtigoy.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nygwdsjj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xgvwqrtx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hxmntosm.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sezvazhc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163owisfgnw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gskstcsv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163eoovpyll.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163gjlefehh.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163otwxrabm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163tsootddt.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zsaxzwnp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163bwotmose.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163edrfakgs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xcfjtmnq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bctuodcm.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tuyhmoxx.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163nuvqjmnu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163swbnzzsk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nicdowui.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ziutfqym.html


<!-- 参考信息 -->