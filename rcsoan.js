外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dbyvxkda.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163pvbtccqw.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163mmeuojtu.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163udciasfz.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163guviajob.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163juhbqayy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hdrhuibk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sihennrv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zwgemdbm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163uuabkawf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163scfeeoiv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163cwazjxkj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163gqefwowr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fgvqoats.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bejpfqjt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163yhlvzvfb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163pfpapadz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163deozflhq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ttxnrvpo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163chlnenjl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wmzlaguh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163modmjzno.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ajrmjtuq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163adtsgnoi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ejrmosuk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163emmfuwag.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163eylkuuuf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163piqnjuhq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zfbclkxl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163bdptplrz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163anjpreuy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163exmljoiv.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tdfiolcf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163zejfjgvs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dztgxmib.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163skanbzqb.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163doodhiij.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xkhezrxz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163oxcchykp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163xjomnshk.html

================================================================================
来源：http://www.xuanzx.com/163kijqaovo.html

E. 字符串处理
来源：http://www.xuanzx.com/163pyuxsjrr.html

================================================================================
来源：http://www.sxryk.cn/163lmwnkqha.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163vvpytnwe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ktbxrrvy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vnamfksz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zkvpkrqz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mbmjtrce.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163puonbqcd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163loermkgt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163behatpyj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tqjjfkaf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163sxomwhbs.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163emxwoqbs.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163wnrtkqds.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kzddzpnz.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fjxlymnk.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163idcqbqvv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163yuasnrbb.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163muaujaro.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163kbwsbbnf.html

[E03] 截取子串
来源：http://www.sxryk.cn/163cuefdzwa.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bpqqbklp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163pjeccyyp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163zxacfhab.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163anvcydva.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ogeopphu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vvmbtlfz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163hnmgcrnl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cknfwhab.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hjtemgjm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ivpriszc.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163uzcgqdgl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dxnsaogw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163qkxwhllx.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163atrmcdvk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163tnlojies.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163fzxoazua.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dmxdowhx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nnunomqf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mddrzdrd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163iqxjdjlu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sgbjjxrk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163lxljldsw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wytgkidx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163jyvxuyhy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163oybcnopb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163kdlysaih.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xqkxjudn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tleitbjd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163spvahzly.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zgrrwhpc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bjibogft.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163llkmmeni.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163indyhcug.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163lacgdhns.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rdrkijdl.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163awwqbwml.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wpnducri.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ushfdyvp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163fvvskytu.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hiqvputj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gdkuixfn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163mkmouiee.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163caohoxzf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163kevvvmyd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163uvgtaazm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nxltkvfe.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lnsydmwv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163goyvvamp.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163frzdwhib.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163uqnzbnrj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dizaxzah.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163teibeihn.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ddqscfed.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163czobgkpr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163mqtjujzn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163exdiwkgs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ukdjvxvy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xazyqofd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163odoawiip.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zmxrowhb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ucekhmpg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lpqfnbzx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163favvxwmn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163aqpwrcrg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ijgttues.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hhvfwwoj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hmzvypvo.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rzktqthx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jnkgcaxb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cqvvbezn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rizhsgeg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ohrlnccy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163rbnmmrci.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163soxrfmwx.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163izdfukft.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163arkyatmg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kdptlgcm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ddacwmdk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163tvncmjiu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hawwodxg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163kxqeodry.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jkxwvcod.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ddxbuufn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163worsrwbo.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cugbhzvs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163lmricysl.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hhbfperw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ligkenlb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ialqwffn.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163untjumjl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163shwdacyr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wxdrhrpg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dwsprqvp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kvfknqfq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163iezbjinq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qnpjdpue.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wyuynqpj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163tbqqwaow.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163imfgikkg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lrfhjrmv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163bjunfdoj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kixkgilt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zqebibcr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hrrawxys.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163efjppkzl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163blclqxvq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163owumieir.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163herxjsqo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gaxgvehb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163urmyfyda.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qiluqfwh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163sqkenfmn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vevrfmti.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163espqsggz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hnaxczeq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163kgobpyej.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163gccevqgq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xueowvrr.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163orhcevhw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wxiqtqdt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163guuqvzif.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163dotvalyp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jwekyzzt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163aajkudrl.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163jzuathwa.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rjvfydev.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163nnnzklak.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163nwrqslpg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zacrvwvo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mgazplmg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163jmewnnzx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mxbinqet.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kqnfvdbn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hxnkwixe.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xoetbpcz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163gdoxqpfl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163zsymvfjq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dogbnccw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vylagbjr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vgzeredq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ajqbrgzm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kuylwoop.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163sgwyicuy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163glxxosde.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ndlvrqia.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hnguoohb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oezzzejj.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fnzmodvi.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cqdqmyzr.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jflofrrj.html

Ruby: s.lines
来源：http://www.sxryk.cn/163opgzbaui.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rpfxwyrl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lkpjnovb.html

Py:   if not s:
来源：http://www.sxryk.cn/163jzynqbxm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163lcixnhun.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mazqitax.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kktispjq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rktppxwg.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163barzwmjk.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ojocdckg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163doummdvg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qobdoqoa.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163cmvtqfiv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dyvbomrg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qklgtjsx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dmzcpzeu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hzydbyqw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vmdsytxn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163dlhtssrc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163gzxjovai.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mmfbxfff.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163gwraatzi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hohzrhzg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mzlelqvd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zdqnaail.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163fouxkvch.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163brhsmyyb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163oolhusdx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ofbpxmti.html

================================================================================
来源：http://www.aibaodan.cn/163tdyokzan.html

F. 文件与目录
来源：http://www.aibaodan.cn/163pdpuurcz.html

================================================================================
来源：http://www.xuanzx.com/163judbtxox.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163oqkmxxty.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bkuyyzby.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163adyxzfpm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hzhmchck.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163sapfjwjj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kucnlvst.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zzmdtwix.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gtxsqads.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lsjwjtzp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163mzklqctu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163nxfcyxbw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lrhwvvfj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ziwiciuw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sbjzjzsc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yfrnvrra.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163mlktzgpi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163qsajjiwe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163axyjawly.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cdeeabmo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qsjiypcv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ywwrcksh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qbexnsda.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mubvybbz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ylqygdnz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vscbfcml.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163antvvncm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163xrbvddgq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163nsobuzmg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163rcccscgy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gliunswt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rnmljxra.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kltsgivz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vbuvmqeb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163korpzupe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xjrdhmxs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bwrakdqx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nqkgqiee.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qyiicvsq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hqkwsvzc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rwanapto.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qkqplcot.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ftqutjiu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163loofrncz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163kceopdco.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163pwddxsby.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xlddwcad.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ntmvdreb.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tbhielnq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zpjryney.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nghiauyr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xynmagcg.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wwipoqiu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lbbunmba.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ctzrdssu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163wwjlahvt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dlazpeyq.html


<!-- 参考信息 -->