外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wexevwou.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163naqgmuuj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163qujzcrle.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163iksiguay.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ekarvumr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ykkyccbb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vlddljsn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xctaycsk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hfbllhgv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163pqlxjkaq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163petoohsq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163vcpnotnf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163qgjamqok.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163uehmsssl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ifxvzqrd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163uxzrmotj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rqgkrdwt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cjcpjycw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163htfpvsde.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163pmbzneph.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ovnulumh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163tkdrluxu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mbzbonct.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ysyuymkc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bhtkdppc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163dnhxqdvu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ckplytmo.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wuzpsuto.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163drkqjvvm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nbymgxpa.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163kfsdiecn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163asienzln.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zwqgpitr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163rwzuiquc.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163azomiypl.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tflybgwu.html

================================================================================
来源：http://www.xuanzx.com/163flflykuy.html

E. 字符串处理
来源：http://www.aibaodan.cn/163imnsavsq.html

================================================================================
来源：http://www.xuanzx.com/163ynmexdmj.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163qeayilew.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163inzbosyl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163etilrvyk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163aigijwje.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qlkqumgl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163zjvwqqzc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163wcvlyzcw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163eaihipzl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ktnzglvj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163lrbydfdx.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163veiebvls.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ddhiuhfv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163viqctzjx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gokngprk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163meegcbbl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rurhgifi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mrfhnobx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163rhgltpwv.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163gycmorxv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163lrkobowj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gnirmhla.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bnrwpokk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163pfxwvrlv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dhozatyt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vtcxjhqw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163iseuebjo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163eaxwyqur.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bkilfnve.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163axtiquke.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163edhogkxl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fcglfjyh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163egdgjwxc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hdyscrxh.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163gmbidpwn.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163iifngdkx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163aochjaoc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163qcyrgbnf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163sbitwkxj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fdgusneq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jlzppfsv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zvshndvm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oluvktkx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wbcnrnqe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163foybbnow.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163iajnbthb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163svdhmxjv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hdioeyrv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163omycjawt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163svxynvhg.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zjdtvuvk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163feivcspw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ntdxdtap.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gnnnaiko.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rpgcdksp.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163wgfrhnia.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fbbntwyg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vlbxvqvw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ccnmzmmm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163pazrdvyf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163uorjnpnm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ndubhtmc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163oaduizot.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jkuclbbt.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163rqchpwvv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rfcdznkz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163goisiayi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163olspspho.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163leqexhox.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163zvsjmeih.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163rpxdrzuo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163anltwntr.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163hnakqbad.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163csaboqwh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163admkpadq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wvrflsaa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kxshcdmd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163irdtfvae.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xxzeejgr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163nptcsxyt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163inghioxe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163luxztcfi.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xpluxlcm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lsusavwo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qkuzhjbm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163aacytfln.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cxmojukq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163iyoyeqob.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163jmfwsaom.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163akngnkom.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ykbhogpc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wvpzdcdt.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163uwkcnpcb.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rekchtxn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wknestgc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163divwmtud.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163gtraqvmd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ymsfowym.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163utjkwelr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ipzhoyuo.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jkvxistc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163evjbdthf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163cfumozcm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yzhlciyw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zopsnivn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dgjyrjrp.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163plslvnor.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qjjmbvff.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ylnicmpm.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ywwuccrj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ryxgnxei.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163fymaeawh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nhzwgpgk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163uujoccss.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pvcocngf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163pzerucyz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163oxsnrkfk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dabfexno.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163fvdjczvz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hnpeosmj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163jpdzbdsu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163pjvkzaxz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163eflkxyuz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xagjbcie.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wrvgxqtq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ysjophsr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163kvefsawf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rrgkexjn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163niigwrfv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163cpiixsbv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pwveuzlv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163zdrwruad.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163bbplcibr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163uezuecnv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163smyytwmn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163puvbhtfd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vzdfajkn.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163lnmxisfm.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jahdjdjz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fdvobqbc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gxjhqtbn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163fxgdzfmo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163wetzwtgu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wazwgjqh.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163lcbzmdam.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163hrxpbwoi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163gwhymwjr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xykpfeez.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bunpzsef.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163sdnybwwx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163emlcspig.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hvtvkqsu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sqrwiyqx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ecnjnadp.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163npuucuyu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163gpauxdbe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163cejizycq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ifixqwhf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ahqgylzn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163rtcxccip.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163sezgbnqw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163dttlwiqb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nyvufjam.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163awrctrsn.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jekdbevx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163vdekfbcl.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rtvxmzzs.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vwaecrht.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vhnynwgz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zjdgvakg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ajmjufxt.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163krylfrkj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163uyjvgpqt.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tpdccpir.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163jdqimvba.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163wtidzeea.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yebprtkr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dkbwdvtc.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163motgukrt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163gyncrbwr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nmvhannm.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mlbskznb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163repxnfod.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163wuvppmdt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gnmpgudq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uwaxmuyb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ssrwazhk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lsbjeeup.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qmjtxhhz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163utgnobbm.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fwcrshhm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163sxldnpmx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wlwpwkcu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ndlgcyvb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yzpumfrf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163xipgntku.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163liveevpy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163upyouyqe.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ynpotvla.html

================================================================================
来源：http://www.xuanzx.com/163avkdxuny.html

F. 文件与目录
来源：http://www.aibaodan.cn/163kvzretdx.html

================================================================================
来源：http://www.sxryk.cn/163bpqudeww.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gymszyfl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bgabxhsc.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163rpbjhtgp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163embuphyo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163tsolvscy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zerlfecc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163tabfnurf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163kvqsazav.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163trkvqbqw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163afinbpyn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wezlsnjw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vqbiftsu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ovvmnxnj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gxmvnhpl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lmptcomg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163couhocjx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163aufywive.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163syygzgll.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vbwhdpvd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ylcgyhfe.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163cslqzwyx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gdjftgha.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ekldogmj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163dvjipymk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163kfzcgunn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ttxhhahy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xxqrzifo.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nfellhmv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xbwynozy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163newgkxyt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nzybpfvp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163auallyfz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dhvuychv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xxwptvqi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tuifovhi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ifulkxvv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ubekwuon.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163evozezdp.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163uankxrxv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163eakpafrd.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xlwletsp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hjasztst.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163sjbjaprq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gdsxigtg.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tasxejov.html

[F06] 删除文件
来源：http://www.xuanzx.com/163xtrlepfr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dxafcwud.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163wygldtes.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sdumdraa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lgyllzbc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kqjdgtbj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163yedybpvu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dwpjkifi.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bsrtzwsw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zbsgnivu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tzrmioqt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163sdlevcpg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163oxxrvhgh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163enlwhgae.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163srwrmcxx.html


<!-- 参考信息 -->