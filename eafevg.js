外链999!wailian999！

C#:   s.Length
来源：http://www.aibaodan.cn/163wxebimeg.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163sdykmhkp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ccqhzsmf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ietzvqwf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vhyvgvxd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xzbepreg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163yubfmunq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163nhyzuwhg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163xmslzqpi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163gzwebhgj.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163wiosuapm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163bnwfrlqd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ahvifiso.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163idanzxpv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ketfkfdj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163cxktruaw.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xfcfazej.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163pqmdiujo.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163fxpwfwbt.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163wxgegiih.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163fckxcnjv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163wzcaqfiw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mzlpflvw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zznokpmz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ktlzdnub.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mjyzhoos.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163gduyyoyo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cvneofwe.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ushfasei.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kjiicmae.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ecxqinop.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163gglymnhh.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163chwgvajq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163nlipbjoz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163jyrvqohf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163fljcuuhh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163xmpzjsxm.html

================================================================================
来源：http://www.xuanzx.com/163wcrtzfhk.html

B. 流程控制
来源：http://www.xuanzx.com/163hdoxvnsn.html

================================================================================
来源：http://www.sxryk.cn/163gedhbpqw.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qkhrqhgg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ltylevgt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163yzzegxag.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yarnnysz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163etwhonaw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rbidgdri.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163qegildwa.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163kpawnqkt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163eydxlpjv.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163canizcqi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163cepyppnt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163mtnrvebs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dhdbejjv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163diwnwngg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ebomyqfk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163cbpoqvph.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163uipsxhng.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tfnrpvgf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163fbnanuog.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163xghekody.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163oulqbkzl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163efkquimg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mkkixstv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ozmmnikn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163gjneddhh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163oxafbhtt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ynbyiewp.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163naxflcps.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163orpbcaax.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qitkqthb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ikfzmkvl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tqxvljcp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163qbrlgfja.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ohrzrsly.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163qpxdtzmg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163uhljxdrw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163zumppcyh.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163exyzynpt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163usbjxjlq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jwuegwnq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ikmqiufw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ezrstjxn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163akmclmok.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163txredhwl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163waawgoki.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163gnwxlqyj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hooioins.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uvmnypqy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bohfkezx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kjofqrrd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163scioitpo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163fngsninx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xjxggogm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ttcmfder.html

[B07] while 循环
来源：http://www.sxryk.cn/163xzplerch.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163qnvofaga.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163aqjkeofs.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kukpfnfm.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163teqdqsyi.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cquexfkq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163pweaimdv.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jomixjyk.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iohxzuik.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163hvbvolyj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163rqrlufvy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163uqmonrno.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bpvfxckn.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iliayjep.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ptahcslq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163wpmwcqig.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ycdjsxsh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163puffkcbq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163exmxrkce.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163vmzkwqwn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163tryffnwk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163unbypend.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163peabwmuf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163snhjuadr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163dauzeawp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163bfnwaeid.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163coabtyzs.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zrqbqhjp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kkuguwbk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163adfyxldh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163plcoakad.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hldcoiny.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vhdpcxwj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ajwddnpn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ikcqeqsw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163svttltym.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163oonhhjtw.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163iseaaogr.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163dcgswhsb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wjjwizbx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hhrabpnx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ymnxwedd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xihanldi.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tnszqknl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jiayjfxu.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163clvspeuq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163obleybcr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ckwyiozh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163huqqaqnn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yilrhfbh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yjoyehvz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163fpcpdmpk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163iqgqeiez.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163kaxzulib.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kxmanbha.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163skltpulk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163amxsjxzk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163komexuen.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163omlbsumi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vwgpbwjh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zyjudijv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163zbnwwcxc.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163quzoiobs.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vokyxxwg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163yocfxyil.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163etowtnqq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nvrwwfws.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fjyrkoeo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163eafsauvi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163sspcuqkt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ygnqacjh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163akmzfhdz.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163kpbabzzi.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bwwrppyq.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qcdkzvep.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163sqqukimj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qqgrmvgq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163aumtecob.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ldgrtsfl.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fgyylsqi.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163yupyavjf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163iibrndxj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ndrhoarc.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rniadmhw.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zyxzahrs.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163pfxliwzl.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163epreuyno.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163lxezefkd.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ujnyndvl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163snwmftxx.html

================================================================================
来源：http://www.xuanzx.com/163tmlfvbwm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163szpuxnbm.html

================================================================================
来源：http://www.sxryk.cn/163xulrwycu.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xulzkbfw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ohvvmytw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eiilvlsj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163masblmal.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zwjvupwv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zerqtkjk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163twhbdkgc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163oxstuwhy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163txyhguoc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wfauevwq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163bbjagyrx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mueqqeob.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ewvhutsf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jwkbddjf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163nadgwbdz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ftohbfym.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163cqyxqlwz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163lzxnsuzq.html

[C03] 可变参数
来源：http://www.sxryk.cn/163pxvxrusl.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163etzrhexz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163voopjlxs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163laifhpwy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cqtltamx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163tlulcrnx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163vmkxflac.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163rnismwxv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163wcglyolb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wafnowwf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kebqnmgk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163roemjzgm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163srgybylc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163icufhoyt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ixvinarr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kagzyofa.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lygyldfi.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ypdvoyeu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163cuypiruw.html

Py:   return a, b
来源：http://www.sxryk.cn/163dpgwbqyz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163eyuffxpb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kkzurzqq.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163raxtbzkv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163anbitcov.html

Go:   return a, b
来源：http://www.aibaodan.cn/163lsxgaetm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zxstbqui.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163tzcmmots.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ktddcmtl.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gyycmrly.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163gfmssrms.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163owqkotof.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163fawonfsl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163byuzzxyi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163mfmchwil.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rdeqlwmy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vcptucji.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163fhpcvxhi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163hcebgygv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kdlbwbyi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163sxlwlzln.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hgejbyjt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163uuyxaodw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hspjnoye.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163guptedto.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163btkrcqdw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kqqizior.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gzveifkl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zdjuxrcj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dsswsemz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zrinnhtb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163dsbaknff.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wmlzykqe.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ptkntgso.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aglnekrw.html

[C09] 递归
来源：http://www.sxryk.cn/163kecscivk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163damcqpsh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163eprgnlwd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163luafszms.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163doakrlfk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xvbrmrsx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163amikunrl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ikzkqsrk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163niyrpjtl.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cppatzde.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163edxcvocp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163llfvlkyt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163yelitoys.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hhtiifps.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vscsjota.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xirkkoyr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rdiqzkxn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163apxsxczh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163zhjxowhi.html

Py:   from module import func
来源：http://www.xuanzx.com/163lykjmkik.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tkuqbfkf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163cgbftzpb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xhynabbr.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163denehdzt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zpzelraa.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163bonklrel.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zlfgydkk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ahfqwffg.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163svfjdlqf.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gjczosmr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163edlrbghk.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xaqqqbjd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163jwagakvs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rfkmnkmq.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163iwcdwwzh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163izlbfcoc.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163dxxkfzve.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163gjdgamcq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vnueixuu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163narsrwaa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nlopblrp.html


<!-- 参考信息 -->