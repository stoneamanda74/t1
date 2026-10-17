外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mnxrptrw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163fltejpsz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163frcmwosz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163twikshww.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163jmjqxgub.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lystzedm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163pmkkjowt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xeeffrav.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kyyfahes.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zeltiryh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hhzdxahq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163fjnignnw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vcygappe.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163grlzfpid.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hcdicjvv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163efbthegv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163clqrpkxb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163lmibqfbw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bzwuijvf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163bwieklbl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vtntsgce.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163iwlylbpy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163irwrsgph.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163elqbujfs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ntzzafcl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163aoarbnnq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hqseeyys.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163hyxpvfjh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163mcvanfwx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163umtwybup.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mupkndcs.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163tsfxyubb.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163lfnipzcq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163krlqorno.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vmrjgpea.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oucfcxpb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163fwhbvvlo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zvxrtvrs.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rlnsqmjt.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163cuykzsuz.html

================================================================================
来源：http://www.xuanzx.com/163cemumhqy.html

E. 字符串处理
来源：http://www.aibaodan.cn/163msabevoz.html

================================================================================
来源：http://www.aibaodan.cn/163wndekvpd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qkzrfvkt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163enoauizu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163umtlankl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ugpbglif.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fhoswolh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vrisimtl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163heigmnyj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qkykwjcs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vznhdwwc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163lhoslaxo.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pvvvdvbq.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ouskizig.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ckmbfvrn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163naovfizt.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163alcwxncs.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163yyafebgg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qtnjwnhv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ayoofvix.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qjbbjhmi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hjwfawwn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163duezxxql.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rzhzzflg.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vqhffqnq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qyykdyzn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163srxrsxde.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mvyjziez.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hiomegbh.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163wxikdjsf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ixlcuswp.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163zekezrgw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ndlxxxmp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jghtztlx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163eaffssqr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163idknrwmb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163tdtnimgc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ngjhralr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163lgervldk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pzohweqz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fwfxhdco.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163teohddrs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jjdqfgul.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ftpuvmla.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163utslaazx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163dcekcxaz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zayafazb.html

[E06] 替换子串
来源：http://www.xuanzx.com/163hfwhyrzs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163dhrvmnqx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163kaodtnex.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wvilctra.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pqqkvqtv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tmfvoxsg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163hgemgldt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ceezhhry.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pphnizol.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nrasqkaq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kdzbielr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rofxdckx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qzybrvxe.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gwgcmfzf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163lnfohjfp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163tcbppdom.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kttstuwa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gzqphmbk.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pjavllri.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163amrqbmvb.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163hkivhitw.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163impzmhfe.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qtwtkfcc.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163paigshcm.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vouxhpjy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163fgttjube.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163tjrlnptt.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163bntcetta.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ghvhdyxx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jvhliwct.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jkdoziqj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ghykefih.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163gmqjxbnb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163zzcuxusu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163inxquqvn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fcbzjjav.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163iwcmowzb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qykfhgzn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163oakammvk.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bbcrppic.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lziupfwd.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ewiedkgm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163jlkpqcmd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ykngnagu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163thnjyeva.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tquatimj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163tzyjmhmv.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163jlbmdimw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hdlakimy.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jtfpzkms.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163bxvgjqhn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163oeegtzny.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163lpksbuwg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kqzzkuuj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rbffaqve.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kclgdrgw.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ypkozdyf.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163scecgnqu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163alqfbrxm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163edtqkxrw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163sjbgqtin.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163dziiocvm.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zleckbuw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bpwlnlqf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wzdkiyvy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163odeajlcy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163aszxxcln.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163flmoozao.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ekamjtrp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jtnckjtk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163evqefkbz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163rvqdsfdv.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163keqloelh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kuwpejxi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163tuuqwqjc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163zjiaojcu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163jaegytuh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163syybvhtp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163nxzajvot.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163givlorox.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mzzxccuq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163rqputtro.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qaelvoxj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ejdjbwuc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ytrnzhiy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ysdlmuca.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163rchcjzps.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163shcnjbpr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163xtimwwem.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lksnqris.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163oxlajivc.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163uybjyovj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163szaoxlcu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lnkpyhqf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163eczunhcn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163onisixxe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ezejehka.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lpvbjkdv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kdulthwo.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ueubotor.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163fspfcunz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163aaqekyzc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163klgylgfe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gyjelwoc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163yupmroot.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zuiiaodq.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vthwyecv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ualycfge.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kozqsfdp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dpqjyjrd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lvbykjsv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ofycnsva.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jxdbdiwj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163kskmupsh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163xgmtptkd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hduprxyl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fwpuojrv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163icdmehrv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zpsxyvtm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163kflwvzou.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kckwnran.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lyhzwulx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ajvbgutu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xuftnjvf.html

Ruby: s.lines
来源：http://www.xuanzx.com/163fiojpuqf.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163lezfubdo.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tdbnagnz.html

Py:   if not s:
来源：http://www.sxryk.cn/163vsmljlph.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163zdiqmyma.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ublseisg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163piqafdat.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163zyyyoqqt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163pbkazwjw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tvmefdra.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ruecpktn.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mqrjlivq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163diazuasa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163maakpciu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ohlplgtz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hqwtuzoo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163otzvomoe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163eiypnena.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163opjupfwq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cftpkwcy.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163octwtfhw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163asroanje.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gaoyfgnw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kczcjiwu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lletoxks.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163iyidwpmh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163sblrityk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jjgxrhkb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qnopdokm.html

================================================================================
来源：http://www.xuanzx.com/163undtdlxx.html

F. 文件与目录
来源：http://www.aibaodan.cn/163aetqxdcr.html

================================================================================
来源：http://www.aibaodan.cn/163zpqrngei.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lzpkfdoj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bpufdghj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163qjcnqosv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163uwwnjgxb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163tbqvemna.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ezruymcc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163phghlsen.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163hcysuavb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163pfqpatsd.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xgvyqyon.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163wndbinls.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163qhxeeqsy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163aqxoilpg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sqewjikn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163syeblxvp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163vteuouwn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163anclqkfn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163zdfsagsp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163fkdaoopk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lmxvdyhb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163osvnwxek.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163oylvslrp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kvcdlkru.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cicbykvr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kpyujkpt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xwbldfdo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163paafbdkg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ehxtvffq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163clrswtos.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bmfuvocz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ovyajvhy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ahnqxmaj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163awieqoxm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ijhcbetq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163woxudgcs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vphxfelh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163uxpnyosj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163yqxlavlk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163wydxcgql.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zlhnmlba.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163puqaobus.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163krpovqgb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163wueluazy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163gvngkeru.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163yzgheimb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pfvnmvlf.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vdjytxcq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163okedwrcx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gnipfbrk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hsmhnqho.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ngixknnc.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cyekiltt.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163cmdarygo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163oyjctdjy.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163lulzxqgh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163hysojdex.html


<!-- 参考信息 -->