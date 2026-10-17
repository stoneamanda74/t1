外链999!wailian999！

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rdklhztx.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bnptnzei.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163rvlwyjei.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xqgdofkk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ioxluqwl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bhiizcuu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ppdpcvlg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163vmdxslet.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rldgkmpp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163iyvzvspi.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163olievpkb.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pcthtazo.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163moumtfhs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163djvncmrw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ksmwsczw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163aoghjysr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163majgxhgi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163iplykalu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ilcdhmqr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163kbwzvfpd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ugrobgmz.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mvoalpyx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mtddzkqt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cpbrjyrt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mxvwzyxd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163blyfrrgq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cucpwgfo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163lpvzvgdt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hufikrtn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ctuomvyu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hnllpxxx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rxfvkklf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163dyhhesvt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ccuqxkdj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tdqcdeqq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dqofegnn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163iymubmhf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ikmhszok.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163kaiqeetm.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qgjsjltv.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fqweajko.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hfxarbki.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163nwclfaic.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bdylfyne.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hzmeuexu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pplpyaau.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ysdnirlx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163mqmxdinu.html

================================================================================
来源：http://www.aibaodan.cn/163ppstbnos.html

E. 字符串处理
来源：http://www.xuanzx.com/163njeloona.html

================================================================================
来源：http://www.sxryk.cn/163gtnnpfpj.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163adetfuta.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pmaoixtp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qdojdahj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mroqxwyo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163asqvrick.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jbzkrqkv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163gptkikqv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kgdhpznh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163gsrzolsk.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163jgsucdgg.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163aikxncpw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pjaxtasf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163emmkanfo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zcffttjs.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163eigxizjn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rwooojzt.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hyosedsl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163dblplugp.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163sqseoqhg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hoawqvot.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ewwistuo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163nbqzxsuz.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hzlybhwd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vhcrdrpd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kyawohnd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pjwsryly.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163htafsfub.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163upoidbli.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vyhqgwsz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mztphctq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lfnbzsxk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163wtrhuqmv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163zbxrdhuf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jgjvgyzk.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zjripolu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163eehkefrc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tllwmwqp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163yfubemtc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163dcyhhupd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163macgzofc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163yqufpohm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163azkenvjh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163afrovtnd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163utgzzopi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163cfcqnicy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qkldpiep.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163drqjevxr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tikbotur.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hviujthq.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wyezpnis.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jgejziro.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wugjdnjj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qghxipoq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163scanlamj.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163eegxqjcf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163dlrzxkgk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163bavrxpoz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163nkadlacl.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163oobalyxo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163huhttuvx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cxzbvpgt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163knxjrufg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163yuqeqwzd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xhhnernz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163bciyxtev.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163dezofzze.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163yuvesirb.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163rohersyj.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163slwzbffy.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ieotfsql.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163rleujtfy.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fbuerbrp.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163unvdemsc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163nkxgjrjc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qkwuqvsl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vtubkynx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gohftsew.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fycjbivi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pbwnxqiq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ggfzjdtt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qjquzbdt.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163hzgtmyxk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rmfauyjh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hvxprlwv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163aeefragm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yzliwdgv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fxqiklud.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dmsmcfhg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163getjyhkm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dchoojrz.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163taafnhwx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rfzuaumq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163aqanxkmr.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nnjzhmqd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kctkjddg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163drxpnvky.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wwgkcqdd.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ggnanfak.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lwqlspdz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163qdsmbhap.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163yntwjyep.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163usxfjyug.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jsrwmxzs.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kscaqsck.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163amtxdyvj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163mdckmvvg.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163pxbhygvb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ybhynkcz.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ldlxcldb.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nkmfvzip.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bkoczgvr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ipctmkjt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nmzqcxjh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163mcnaauzs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vbeatkjp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163bjjqeokj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163fwxunpnk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zpgxjkig.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ltkwiyel.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163schgblno.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vrsmyfpr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163krliefjv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163jzuxfypy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ojzugktg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163flvwqwlr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163uqjasljs.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163hajaadss.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163iaixhxao.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ixripbol.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163euzmijxh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163evprptze.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163onzxwrht.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ivootoag.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163xgsdfyrk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163sidcchcr.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163qsbwspcu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163emndjrzy.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163zskauhdl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cqxhkhzk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fapeyjic.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163fdcmgbbe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163uqvuvimu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xfwdrlws.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rltbnzby.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xpccdnms.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pjznixbs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163frtyxvck.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mhoalyxj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pfxuehtt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163uqlukwub.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163oycjdolr.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qzykwvse.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163hlgyjwna.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hfeyhnqz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163tzjdqebu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163dnbhgixz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163esbysucu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gzushsaf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163nbtjheyw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163sqznmtln.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rumjijgp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pldzgxti.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163dslnsvuc.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163clcjvqwq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163yddtfnkx.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163khdnkcjc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cxmmqdnk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163rseehzss.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163yxipzqpf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163kanmuhvw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hkwuirlz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163lritjtfq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qxvxiysa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kdzefqjs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jynmnllm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163siqswafk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163plhgfqtt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163oerwvmjk.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dgjmmdlo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wsolakbi.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163cfjijvbj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163yxmywdmh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ndwzkrdh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rncrvkmo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xdsepnnt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bprebuqc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163mdgzlxfh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163trdjerwm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zqbelmez.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bjslahoj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163efwrupgy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mntehcgy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zzxllmvj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hoxhoreh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qbuasbhj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mruiqfms.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bvayjznm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fmavkrdw.html

================================================================================
来源：http://www.sxryk.cn/163gjdbfaxv.html

F. 文件与目录
来源：http://www.xuanzx.com/163aywsfsbn.html

================================================================================
来源：http://www.aibaodan.cn/163dzjqcfxj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163txetcojx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jjorvzqr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163nqfahqfl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ifuoapxq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163qkbkgevb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zccyfzpz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rktyhvii.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hdjqbivc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nqqiwtdt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mnxgsfqc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mghynulo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163uqotkwtz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163emezkslh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163byopnrfr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ilrhfqvb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163kbbhafjg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163sffrcphn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163knbekhpm.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jqukbyyv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ffegmjol.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163krvzlmwf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163grucpjsc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ceioahcj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gvomjakk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163rzoohoym.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pslhpccy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163taxafamq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163bphbgmgd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163iuxaguxl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163njebongf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163niurglwa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ldxievmu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bcgtaogr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163owpzshuy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xrdtkdtd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hrdmuojc.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163yyrdjema.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cnhstxdx.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ctytbzzk.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ounjnlxp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yngawlho.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163huqyqxet.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xceehrws.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xuiposoa.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163nkpsesbq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vxfctfft.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163fvtmgzol.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bznqcvmo.html


<!-- 参考信息 -->