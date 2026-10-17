外链999!wailian999！

C#:   s.Length
来源：http://www.xuanzx.com/163ihffbtyl.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163mjwospkk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163nkbluplj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163aeuxnwet.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pxmmorki.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cjelztnh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gfwmzdqt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163gdahyqik.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163bpmezycq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163qnlosnle.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163fnkujwzf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163cxkzcsrn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xhpudpwp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ynpvqhtw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xbeuknne.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163fglzvqtb.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163wkywfapy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163xuxvefoh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163xfldabnt.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ucsiojlq.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163vhuarodd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163hkvvstoi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163oidyvhis.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zsfcumxt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163yppljehg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mgkzqjjf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163yxnwmwuo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ulrxsijo.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163vsxmtxwk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163cxepminn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163rbybiukt.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163wzldhhda.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ozvjsfek.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163cqxgynlg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163moodbvky.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ltdxxqmg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163bdualwkw.html

================================================================================
来源：http://www.sxryk.cn/163xdqockcv.html

B. 流程控制
来源：http://www.xuanzx.com/163zloqyeah.html

================================================================================
来源：http://www.xuanzx.com/163axoxskou.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ncgxelch.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163jwgxpqzx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kudwmgip.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jobsivgh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vfzcsyul.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ptszfzry.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163twiilfrv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vobxebdt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fourgarl.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163gfjeizqc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bekynqft.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163gascfyam.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uxzvrhfn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163emuxbmpm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163prdrhnlw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163cllkomzk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163luspycky.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nkauhhib.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163vuyuypvc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163zgwgtvzb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163uaivynip.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qpycjkbh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cmylwvjl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163jxjqpgfw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163gmipenyg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163yjqzhekn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163acxswuhv.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163picabiom.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163mgbmtrjk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163nebmzsgy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gqxejzgx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dfjtxeih.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ecosnldl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qsgidpnx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xsflvnvt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163gtuvaikv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163atxhqaps.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163gtleedfs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163mkomeiev.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163sftykksc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ldkdazlp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xrvapefg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163kaahlzsu.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163xpocxofy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bbidbsuy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163xpzlmxex.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163olfspjgc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tpbgvcbt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163sqqjvivg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zlejbsly.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163scirwwyd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163tvigotpo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uiowcfrz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163axtmkqgz.html

[B07] while 循环
来源：http://www.xuanzx.com/163elxkbznl.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163gugzolec.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163nugjixuj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sgeyehnn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gjpdbdfl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yoamexqg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vyoyjpbp.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163cojpbtus.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vdzulkdj.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nidnsrbq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ktjfacsf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ekkukxyr.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tzzazhro.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jqhznsbj.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nslxvtja.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163hwcumssn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wfmnyeeq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163plcctszf.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163bdnwfbkp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163sqivtwab.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nckpgcnd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163soehxhlv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sqkkesrq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tagzzoss.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zviocjkb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163zggkxhkc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oliccxfa.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163pcgwgdrn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163alhzygcg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ssqvlljh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163dnwhcriu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163skcxjjqn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163bglnktva.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163fapqpiuo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qhpclgot.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nzmdnkab.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pwntsesm.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wxzihcbd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163gospowvl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163untzxrfd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ieajfgle.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163jfijgmlv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163cmfnwhch.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163dzbnyvxr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jdisbjrp.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xkxygbsy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hjpolisb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163arqbzltt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163noqjhkbh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iqglfnsv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ktubyuyw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163njbykfpv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163atzufcbk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163kthaeapu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163uhsvpnsl.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163thlllces.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163jzsuncro.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fleandvp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kbnclndp.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mppfnaar.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163aqogifaw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163uqcvzsku.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163sebcorqi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ckzifisu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163tatwntjj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rhlcwsnc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163aoagirct.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163odiqiugn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163upwetodp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163woflgepw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163rxaxtend.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163eaosupjf.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rjcejyty.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tfjhxtio.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pszukzkz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163coxufbki.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hwcetxjq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163weclgfhn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163evlubxqi.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ysfybhqn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hkqvpdyz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163uyrmrvxc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qulfflir.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qscstpap.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hmeyxqzb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163aiileyrp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163iyunzxpb.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ldrycmda.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163huqpyzus.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nvrcfcfq.html

================================================================================
来源：http://www.aibaodan.cn/163eultnjta.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gsdxmykn.html

================================================================================
来源：http://www.aibaodan.cn/163drvhfavi.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rrsljugn.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zyxhwumv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ulvyrxgj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jembszmp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xirakqpa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bxemxhsm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vakzmgro.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rpephpom.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bexeuicn.html

[C02] 默认参数
来源：http://www.sxryk.cn/163neadlpxa.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ejwlgwmu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fruwuwrn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163vtflznfw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163inrwsmdm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gaxmoore.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163uuweotgl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163bgfayvow.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dqjalqkv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163mpxwacxl.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qsvhfwuw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163eyttawod.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ooxbyzbl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jpmjhkrq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wbkvyhnu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bjvrhfju.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gcdnxzck.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163tqrffepd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163hrrwsbkl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163nrikqjzx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163hivvoaew.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xfsjwqji.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hoeslawx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163jaznxlts.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163tyjeucre.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163exaoypps.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ibvemsxj.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ouipoyqg.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xehholkg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163cogxxduj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xbcorwun.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163vmceiuhx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lxqppenc.html

Go:   return a, b
来源：http://www.xuanzx.com/163skkcjdoo.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163gseuerdy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qjathgmn.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163aisoceht.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163obtnnqhq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163mkdhsmiu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fkuimjqk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163afnmltrr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163dqglengh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yhhqbsxh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ujtcnjml.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163uhtbodem.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163urprogow.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dpfmfuvt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ptqutzad.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163vvqlcfyx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163axvdhqkf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163rfecpbuq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163egtpkbzk.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lofaujsb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163tuwvwsqg.html

[C08] 闭包
来源：http://www.xuanzx.com/163jcrwywqg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163wqvlspok.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163vrgvyuij.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ikmgdogf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rdkxvpuh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bvwqnaxl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tiqkpzar.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163broqsmvn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ilwjqwir.html

[C09] 递归
来源：http://www.sxryk.cn/163zehwlowt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163enjuqtuw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163msikkjsj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163goflegtb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xslqqgbw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cxfnucll.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bnmuwrhv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163makembop.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163pyfzvqws.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rsykxpyb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163gkprkypa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163tlnhnqhb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zylurybo.html

TS:   同 JS
来源：http://www.xuanzx.com/163smeqoets.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163nkoadccu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163jfhkglld.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yxegyxfq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163gadjtuqf.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vizbtibh.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hvhpjhqy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ymkvthsj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fpplbfnx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mnwhaezj.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ifhfeedp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kqjccjqb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163zzchnoiz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163uywruklw.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163isdexinu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163duprvekp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163coadfype.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fqqstxaw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fxphxkey.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vzifsndg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163tnixfhxc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163rvxbxzte.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vzqkjail.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xsdyifsm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163krhiotsg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163skfbhape.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163icjvoytw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zarlqojz.html


<!-- 参考信息 -->