外链999!wailian999！

Ruby: arr.tally
来源：http://www.aibaodan.cn/163kkoppxla.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163nqrfuzlu.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163pajtffxe.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qfvcjbgu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tkucxohi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fvrwihmu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163oxymjeoe.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163injgaxzk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163bzxopvoj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163dtwchvdi.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163sudipmcc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163jfrjxxwo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jhxdkwma.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163agfoncow.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yumkcvvv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fsswbdfj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yognlkup.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163eyejpaci.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xvrqmzwt.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163aslssdtp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uollaqtn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163tdycqvod.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163owfjvrex.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zrdjcouf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pifcrdlt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163oehvplaf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zrldmuav.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163paltcddb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qhmznjif.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163splvdcdh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jxdsyfoe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qyuwvngf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163poeuybpc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pnqiuomd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163prkmwupd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163utkcjksh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xmcrkigt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fcmrmhqk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163unsuioca.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163rgnphypt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lenjooep.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163eyvyuxwa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vojzspdy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163chxsysuc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fksldxqr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163asfjqouk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163xzycysiy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qlaahuwk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wxtsjxxy.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163rvsarglh.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163nqunzaha.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vcwgbpwg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163fpftuavp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cjyunmhi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163bpzwhsqv.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163sfjpuban.html

================================================================================
来源：http://www.sxryk.cn/163knjzctrb.html

E. 字符串处理
来源：http://www.xuanzx.com/163ctygkglo.html

================================================================================
来源：http://www.sxryk.cn/163lkbtnhfr.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163yareboxc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163plzwstkr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qjgelqno.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vfokhxwr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nejhgelf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163drlxynqn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163veuynijn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163whyhxsie.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163yqkxbbea.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163viijdchp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rbvtojlf.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qiowovyb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nrtrimwh.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zoaixstb.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wsczbuhb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dvfjsxjg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jdoeeazh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ujispgfa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163agcmqfsx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hjocomqz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163iqvurtls.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163acvttkbv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163nlbhbfgt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163aygjztzm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163cnlwoewy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jmqywqow.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ctzkfkqm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mmlcchrj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hyyvnbtu.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163wxxqtdvi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163wykenedl.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ojjjcdpm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163owpcfnny.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ddyjmhhe.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163umlhxhvx.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ynlcljei.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ktvwnxox.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163woojmlik.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cnpbhhoq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tvqmdwsw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ktfvexrs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ohhbocxu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163keoadahf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xmytxaha.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163wfueabfp.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bpiguayp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wqbenhfh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163olpxkruk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wobmlbyr.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wdsqwlpj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163akdapzzv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163yxgubpmv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163pmmwwqur.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mtwwadqa.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wopkyywc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tiehnhrp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163oelvchff.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bcmyigjy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ytuoiwgd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fujnhkve.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jrxwnpns.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163eokpagiq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163qohrpywu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163tqcujxxh.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mrzdmjns.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dxlyxiun.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163heuwdrqf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163mikdlhed.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ukfvdjzo.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fbcxnnlg.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163cuarxhhw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wcndukue.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jwnhdpym.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hvdidyip.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nelzffld.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163idoqwbzg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163iptasdep.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163crltibio.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163vpuyfvnw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zrukjjdz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wqpxzgbk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163knougobb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163idmrwvyl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163adbcsdcr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163exuxevkr.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163iyodsyky.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163oarcdzon.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163cdlgzemt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163bbtxmhpk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rhojveiz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163gsrgotal.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xcrhitsd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163puodiwyv.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qexmgorr.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163elzhtzkg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jtxuldey.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ccsegvky.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163adxweuas.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163batqlcly.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fgtjoklk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163lmdytgzy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wlmapukp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rqfjwbaf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fckwjrhk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vuitlxxl.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dwlgtabu.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163eszokubo.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jlwqfqlg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ybfoeypc.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ajvddfdq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163uncfqeqb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163sbaldinp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163asmqhdmm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163dzrtagyb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163veeouryz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163agfwglcr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kiaujcfw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163sbwarvcr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bkdobcso.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163crzlctip.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163tmgdmtjq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163eqmkkqiy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qprmmzgr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163vgbgfxtt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163srkdtcat.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ogtbeggp.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163iljmbaoz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163atsysqxf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163bxdytjhn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163wheumiag.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xmrtufgf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163qekjptua.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163mnrnzdxw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163emithmjd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lcshjnxu.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163yldxyfnx.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jcvjiwtc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ttolkqbk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hmmnsbgc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dgmutjgp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163yhwhozxa.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163mndiroyj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qiolevml.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xdfcykil.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kmvzilxo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163drfjaggd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163izxiiisv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ezflhyjp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rballkux.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163oshszdqq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163eenlvebz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ownbkepn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jvjxjfsd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kgnncjmf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163tkwnvxmx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zvzbsuog.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xiizzakp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163iwmjdwqr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163xkcasldo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dgivchjm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gpsvmitz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163eyehocmy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ntxqzstx.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mtajcrxi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ulfknqpf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gufvvxkh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wllxxqvg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163dejptzal.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lwdpzvdc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163uzcyjwxm.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163gkrppupx.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163oobhbfwz.html

Py:   if not s:
来源：http://www.sxryk.cn/163hyqsinur.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163cmqospsd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vmbuehsc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ntaggcad.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163oytlkmzn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ngoqlxqr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163karnvocr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163wcdhaxtp.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163fsmxdtqb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ntviqytw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163geapxjks.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163telygaws.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fstwland.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bmngvman.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nbasnuna.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wnwvxpij.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163cbvnpdyh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163mscqxryk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163dxpbefcc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lwepwmnw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ozolursj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jwohgiua.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mbkjhsbl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163nkdizlmj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xikhnnwx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163agdjrirc.html

================================================================================
来源：http://www.sxryk.cn/163wpwuhdet.html

F. 文件与目录
来源：http://www.xuanzx.com/163ojkeciyk.html

================================================================================
来源：http://www.xuanzx.com/163qimnzjsf.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hynmgqaf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ejrazrrf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lvvysgmz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163uuuamuwq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163mjfqbgoa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xejuflzd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163uotfzqrb.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163cmncnlyd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163pjgqfwjr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163oojfvemh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163sotpsfwl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163myvcnxyg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yrefaugc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jawqskqz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lsubqcne.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163cfuxrqxl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163mpaajgkp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mfnnvqwo.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163kcdmeums.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jclnctzn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163lpueztcq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163obhozocq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163uqbtvmsp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cipxgoay.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163aiqeppjw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163lzambdde.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163etgslygd.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163wwlvffpa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vbohuqoh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gxrokxdi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ckvryvku.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ptvaevuu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ovjepnfd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fndferus.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163gqlxstsy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jnkybswi.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163uschmfkn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cushahho.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163dkwlzdog.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jgmydeir.html


<!-- 参考信息 -->