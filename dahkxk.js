外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163yhcrvasl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163iujaobtp.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163xgyckvzu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ekuqtmrm.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163lodnfkpu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163jtsretkd.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ucoamutg.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163yhkfgxrx.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ihkdfrew.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cethcklz.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qxrqubkj.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163htfkpsvh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ousoknsz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kcsqmmql.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vnqjtwyk.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163cmnxpncp.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ynegkqgl.html

Py:   len(s)
来源：http://www.xuanzx.com/163knbhiulp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163kxvedjzk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ubelgsrm.html

TS:   s.length
来源：http://www.sxryk.cn/163kizabshz.html

Java: s.length()
来源：http://www.aibaodan.cn/163jqltbipw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163yzbebgss.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bxyoagwz.html

C#:   s.Length
来源：http://www.sxryk.cn/163jimohlod.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163dbgvyiro.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163wvyuypbh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ffzgkeab.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163atgzzajf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kuqfyoev.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163spqxkmyx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163oqooajbc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163nkxqptqx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163cstchrqo.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163yynmmqnq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163pzvvdkht.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163onogcpnz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jdipzhfd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pddmhywr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ydczomwt.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163igetrswd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163qaqrvpna.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163vbavbkja.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qzvwzxkf.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163fcjvkqan.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163mhgguefl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163areyxsfz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rjwxaqtw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gnecwyvr.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zinwhmuq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163jguygvke.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ghxskpdt.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163phzcgwrc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163peovlbgg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163digxqkee.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163zvwplnxs.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163nokwflfo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163xerjidvd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163msllbixe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kmmcnlkz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163pvvugift.html

================================================================================
来源：http://www.aibaodan.cn/163qdbyryvq.html

B. 流程控制
来源：http://www.xuanzx.com/163caywdynm.html

================================================================================
来源：http://www.aibaodan.cn/163xdjmpvar.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163jshueshq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163skqofzji.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163lhodssly.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eqfubdhx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cilbltvt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lyorfkgl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ueloxhlb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163dtgpcaoc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rxupffsr.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163vvrgxwgc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163pxtreqtm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163efrxldki.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hadpxtgv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163haobjkrg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163manerzcu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xhzudajt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163syukypri.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163opntxkxj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wznjnrwg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163rqchtlqm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163rdvvhowg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mapdvuuc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dtaifill.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163omnvaovg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163wjutlgjl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163rqmkxnbz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163mgbmuxzs.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163evypfksn.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163bbghjlgd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163cfmhcpdw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pysppqyd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163maavecsr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163esxviebw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163bsdxhxwi.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163sgrnolhy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163duihorga.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163usaopyvt.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163usdvwgpt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163nfgjoghi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lfrfyubx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163aodexrck.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163zhbsfuau.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ovmpsixw.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163nscxngst.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163dpqxkocx.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163chqmrksw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163rimygykc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163xqlnlycl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pyaygibq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cyraszyf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iftwwvns.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163maeypjpi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zpdxkpma.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163bhtyxspc.html

[B07] while 循环
来源：http://www.xuanzx.com/163nddsdjnw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163etqcdgsk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gjgyxvpv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cjyndfya.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lipqbubd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yzecctio.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163thqfsxat.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163rukmjfvl.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163flmrmrhx.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hewpqqyz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ikfntvth.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wvszicvz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hhzoymtd.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fywpsepf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ehmrorfy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163mdsolhod.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163vtnszrxp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oiusczwq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163klatuazi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163qmyptaum.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163itkvhuwp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ftdmrwxa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kwyyhliz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mibncuif.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163eljrhkgm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163tqllwilj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163isopoujw.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dvoulpjo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163luaqvppi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163llfwyitd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163gmnaalth.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163vlqaqqdv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163jfgjlnac.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163lqawyeqx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163iggkmlui.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ldudmnst.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163wwxwmyqr.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bbbendcl.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163undpqfgv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fmjyppva.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kenbmiwh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163jfhfhsfd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mkwomcys.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163unyswfyu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163rznwssej.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mcvyfnrb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163aoypornw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bmheilau.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163upmxxgfr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163arcdmngc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kbtwdohm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wyattmsu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163timpfpuv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163bsrmpybt.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163oobbaezg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ejdueopo.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cfbqkipr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gnaucymf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mrljhclt.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163aaylqmjq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163iquiglkg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vtbzefmr.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163prbhoobc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163tuxbigrb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163sthugyon.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163rmpzbvto.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nsopedmr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hpnuzdxh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163joipkxts.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163uuxbokfz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163kznepeqg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163tqjxycfy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ycsowzqi.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bsdqetgh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kevujuuq.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163qvauwloo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163yipkthwj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fynhhcqw.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zrxbwjsc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wungpxvg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163smcjhjtq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163kgibiaby.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163asdpixol.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jxggwuwr.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163acxxfpvc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zzkbqlmr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hlmgdepz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163cvfcgehm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rmcdvdxn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ufuogrzb.html

================================================================================
来源：http://www.sxryk.cn/163vhqaavbc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163dqdujbag.html

================================================================================
来源：http://www.aibaodan.cn/163btdyhtvq.html

[C01] 定义函数
来源：http://www.sxryk.cn/163humrrttg.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ofclkjig.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tjoevrzx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163lmgmlayp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ddkggxmg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rwfkiuai.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163qpjbcqpb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163eoxwghjy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zlafsxfo.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ikskzwmu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163terxkeqc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163gapriuzk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vlrvdwtu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163zgizcnrk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xcpypvkg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163suolgezm.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vgdzkxvy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163emaoqcgh.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wwgiytkm.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fmotfmum.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163npndllsz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mawqzpoz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nhvwcgxx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rongjqra.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qgyaxnqd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163eecqvaxa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163iotsmdho.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163drhuzgbc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xfhugwyi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163zfguoxjh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163zbjplbpg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163yjaoaagc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rxcmymsp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163kwyqidlj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pmjprkae.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gthozlgx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163txjicbkq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cbtaymmw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kfcalqdp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163exmizqgc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lqfvfvqz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ewrbmtih.html

Go:   return a, b
来源：http://www.xuanzx.com/163hqjhkuae.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ihrlzfvk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mcvhalxu.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163juvcpmnq.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mjwsevft.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163kyodtwye.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163mamkfcyo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163usoaenhr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zubaelrp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163phizesif.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zspcaopj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163thgjmlnq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163hoxksazi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qpddqcff.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qzmpcsrn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wcrlsqjn.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163haxbczta.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xjgdgytk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ngqsvnaz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163itgkdwsv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bhfvpjsk.html

[C08] 闭包
来源：http://www.sxryk.cn/163gybpneek.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ryrbnsjs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vcwdgdir.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nzulqzbd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yhkgdarx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163iixmmanv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qjnovbfw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lhajrmic.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jjdifyuu.html

[C09] 递归
来源：http://www.aibaodan.cn/163txowpdwn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163afxltmnz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jxmqrlgh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mkmocnie.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163abueezce.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fyplmkqn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dgiasjrb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163aualbhjx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163geyxnddn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jfdvcehz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ugubzwyn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163keouefvn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163volldkta.html

TS:   同 JS
来源：http://www.sxryk.cn/163cgnwxahn.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mvqifqzn.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fbjcakat.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163mneytfnr.html


<!-- 参考信息 -->