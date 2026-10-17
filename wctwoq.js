外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rxgnovtp.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pucawbbx.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fyqldnmx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163mzxiwkwe.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zjechcza.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163fvrsyphy.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fxcwvxuq.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163drvxsogx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163siguwbff.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163tmnuijnn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163doeuhrnr.html

TS:   [...arr];
来源：http://www.xuanzx.com/163pbwhsczz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163bllokekw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163pwqnxmed.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wktnixfr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163scresgmg.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163iwtqqzly.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hmjaocgz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pjanohsk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jguhbslj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ewpdadwr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ulylnnwq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pecqhsdj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163gpqyeikk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nbobmjfq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163frvvxqmn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163igyjyoni.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qzmldjyp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jmoeaiuk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163lsgimsgs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mlrtktdm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163idjpulik.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163smulmbxq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163sgltjgqg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kaztzlxu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bciomcbj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163oeqjfela.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163byqflndn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bcjpbcgr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163salkqfka.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163burqmjce.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pjwryhjh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163yyrbkzyr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zzryidrp.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163nfsxbpjg.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163sokksuaw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ezjgbqye.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163qgowrvxm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163lgeskocy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163sgfwhigu.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163beazkllb.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wypxwnfw.html

================================================================================
来源：http://www.sxryk.cn/163acmnwiuf.html

E. 字符串处理
来源：http://www.sxryk.cn/163dctkirrw.html

================================================================================
来源：http://www.aibaodan.cn/163bwysszbp.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163guvolmub.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wbkpgycs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163sayianrd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ouvcjfsx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ztlktbky.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jawnclbp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ttijsdux.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163wkmlokil.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vyveiqyu.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163lkqllbdx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163pufmzgsh.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163vpobgxnh.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pydmqlbt.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ygiumjwl.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163xqqemxxv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rghnjzsz.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bsufqdmp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bkumibpy.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163zqovjrqk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vzvwrpmo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ytbyfuhw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zldlwexp.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fthkktre.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163hrpzphpt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163eepjktxu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hdbysfeo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163nteztdqq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163hjytgkkx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jzclbqvt.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ionswjns.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ttnyhcpk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kuqzjzfk.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cniwrrct.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163mvimgbtj.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163pqpjgkku.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163lnundlzp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163dwdkgohs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zwcbslzx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163svqlqayi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kecnqxto.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163thdoviwt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yqqzyfhv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163lvloxdyy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163lowbtoqd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ipyegynw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vgebnnew.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ykcxdjna.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163kmkvrqie.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vqqogirz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xnplzvuo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iqtnlrwl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163fcwynuca.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163yhuidnop.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163grwwpivn.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163zvjodskl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vbxlqfoi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163imhbxdhh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163clvrzikj.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jgntggzy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hnzilhjk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163znvneove.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uxkwldwo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163dsyhyzxi.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163kmyukgib.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ajvwaklg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gkmjuhxm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163rfiwjlrx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163oyhwstpm.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163bhsbrvhe.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163tlhfapdx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163inciavcv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163lumpymln.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vmwjbdpn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163sjxwnnec.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rubogoye.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hadkyqxt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163besuxxdi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lbfsubqe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163nmliwwjg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163etljatlk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nqqxogvm.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163miorvocg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163itosqytp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ukvealbk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163htbmsaby.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gjasmjjx.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wpacwbci.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ljezsvvl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mzwmkhtp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mnsoelpj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163bmfoauwi.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ytqrunky.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163uaqpeiuf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163scgcvwsd.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jvljroan.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163rywsqtkj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xepfsnjm.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jrnxijpe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cftewdnb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163chijieai.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qhmmdpia.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ulukibez.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qqbyfpmy.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qbgbxury.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ltodgwys.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cbmylozz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163neiwdmkp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163efywijgt.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ltzuowhn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163lpwfhsep.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163dgzbmaek.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ungqfgdz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jlytgxuh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163diuapsxi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163wwxuyqwl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163blbfxwsz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163posycrnz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163wontqncq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yzjveevc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vbbrmeub.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163qalfsnvr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163yybbsvrd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lfnylmgp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163tbpoxygv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tkahxtlt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163trdtmmti.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163erpkupio.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hgknttva.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nifsecmz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163dkoioryg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163cuwiuohq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163csmabfow.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163dsnauoyd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163sdufogjo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163miuzdizc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fbvygwha.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163vhruwbbz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ypvsoefy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163leqbsbfo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mxxlbtib.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vffxkirb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vnmcqcvk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mhfihwte.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163luojpznt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163aokqynqm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163qcjslhoi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163vkupptsm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163iusvcdrl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ifvksord.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vudyclqm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163omymwqtl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163vyghwtom.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pdflggim.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163mgunyovk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163txnncaob.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hargifrd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ksowuegj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mfgkfiau.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163esohdych.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fsvqiasi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163srylnopl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163iyonqfcb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vcoaygpo.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163brzhqhhi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163syhbkwyd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mcbgqcun.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163btmjhmnm.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wynnlcgy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ldzcopur.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ewngbuzb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ozxjzjju.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jchhkiua.html

Py:   if not s:
来源：http://www.aibaodan.cn/163hwhgxdzv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qpnmpzcg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163psrdvkcq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163mfkdhldr.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163bsktxnnx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163szlrlgxq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ievqklvh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163khfhfcbk.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163arupofae.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163frwckhvk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mjgtmbyt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dvwoubzh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eomjxllz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dlqnyjsu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tupgrvyd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pmurzgpj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qffxcmpe.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163yuebtnlk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xydwqrkn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dwxuwydt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zqbfdvcx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pcvrkgxj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163giobsqmd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163yqhdxkbp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163elkglyhq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ceygtsct.html

================================================================================
来源：http://www.sxryk.cn/163mtqvnhce.html

F. 文件与目录
来源：http://www.aibaodan.cn/163whqnsgzn.html

================================================================================
来源：http://www.sxryk.cn/163cupttgpi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163hdnuursn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vbxacqha.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163smwejsgr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dpytfbpw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163brkuhvwc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yvfqmreh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163onnoxpfg.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yzvtvbxc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163feovdqsx.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163pmvritot.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163sjcmqvhk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163mkmoylsr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gcrbyxkq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163llgjtymz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163skwkfgbs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fabzqzjv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163axehkiqw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163iobchwwf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163iskusfri.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163hfqhprgi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fomfgwbl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pfddpokq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tvlcfous.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163crblsnmn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163fyxtwrmn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163jdxennik.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163hwdwilul.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163qyfxupoq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ejkyzrut.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xtyevllz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vtkpupne.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lxlkzmqr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163wqpuxgex.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163idmfiysh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ldpviogk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tigacytb.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163moafmyds.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ysgejjlx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163fkfakgid.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jrafctlu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163axqqhsmg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kwekuzqc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qeywfbcl.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qqvvxarr.html


<!-- 参考信息 -->