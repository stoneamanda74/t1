外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ufcqosuw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163macmtzyi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163akdcwjbv.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163soaxstrb.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163tzroogjh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ojfikwmc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163skktuwfz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fkopnimz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163sgwkryqs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163azejsddn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163bulufyay.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163inglbhck.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163paduhgpl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163tbxblyps.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163upyexsnz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163phcyplqn.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163elvaymmb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163xmdzcrln.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163yguzferm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163fymnkytc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163nghxwkjz.html

================================================================================
来源：http://www.sxryk.cn/163desmtguh.html

B. 流程控制
来源：http://www.xuanzx.com/163qrodenou.html

================================================================================
来源：http://www.xuanzx.com/163vbkfrbti.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163qhbaralz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163dcgyzlug.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163qtsehaxq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ujdzfaer.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kngphdcr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fffmesxo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ecaueyqa.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163umjoptms.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163czbstyqu.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163iihmxvji.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163shcnpfpc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163qtravdrf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163guqglxsh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rvtjwsun.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dxuhmogn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163lxouelgd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163bvfdiebd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fkmucizy.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163qkhpjkom.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163prrihflb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163hbkmuoqe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163aufascmy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163naovtqin.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163grpvkptx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fpnffqbi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163yiygzplw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tqurgwzs.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163esmiuznd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163foezthdh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163pedprsiy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zwlnxjdy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ufgljsrg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163srrbkqzm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qxzetpuc.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163kqwxlbyv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qsxbqeqj.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uqmzccjy.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163whckzbqi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fqwzagjr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nfaogwrr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ojuuaqnf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163wvedtjpz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163upszfzgf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163megzcvdv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pfdejjvu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ireswyfu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wwnlszis.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wnkkavcr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hmhdvtlm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163trbckgrj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163exqbcngt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qxmmowbv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rwguqmvj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uomrbbvi.html

[B07] while 循环
来源：http://www.sxryk.cn/163aktyuwow.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163nwhocztz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163jkyddkoo.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163isoreuij.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nfdejndb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qdqbxlnq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ysohxtkp.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163lypbzaat.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rnfjwvec.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163gpkotzah.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163zxuefnqk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pqqdlbkq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ahnavgsx.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dlbuefra.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yteoccic.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163omyltubp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163scufsgna.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163afbalskw.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dqrxfhho.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qucmkvyf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163cheecxms.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xmdanakh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tfnawbxp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vfnieacl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163frglhvwe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fbtzaotj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oufmjnhe.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163wxdyvxzj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163krkghoeg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163igsubgna.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163jhvysgry.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gnczrjlj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163swantgcz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jkuxafst.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vqgynffx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163gdgkawvb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xwifsoam.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ewfmwfta.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163gmrxgmhw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163iqpcaydp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163larephpz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kiapecca.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163eykxmcvt.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hlmivxwy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163wyikqoeg.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xprxwfwx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163uevazzvt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163yzioeilb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163clxzokev.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tjhjhxkh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eflyurka.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163konptcoe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ddjzqfdh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163hrblspwh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qjyuxpbf.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163tjrfnrpk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dodvalha.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163inonhnvl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fwhndklv.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kwqcfikb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vuyswzav.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163cvcnurlo.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163zmwbzdkl.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163yabgfvye.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xqpjsics.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163megstkxb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zdljvboy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gevhnnle.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163oemjkfzv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xbsrdaut.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qjatimzh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163eaddunjr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163liwrutim.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xbwjqzmw.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163zbpotduh.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163apicvxfs.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163rypviteq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ailakbxa.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lagcuqlo.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163apgnfaii.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163pnsgaurs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163afcxdlqn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163dkdbufme.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ebzowpdd.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vfahkkbg.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163eatbmaly.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163eebjiuff.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xsabglfv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qxcbujzj.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163bvuqhmrs.html

================================================================================
来源：http://www.aibaodan.cn/163onggvfmi.html

C. 函数与作用域
来源：http://www.sxryk.cn/163cxovheyg.html

================================================================================
来源：http://www.sxryk.cn/163aohifcpn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lkuddoqn.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qlmfcpzb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qdvkmumo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nwfpdziv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mdmheagz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kmwbusxe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163orkdzttm.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aogxlwye.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dhxbnuas.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xfhpoinn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ypyfdeha.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vbcrymdu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ycphsvwm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tydmqzgx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163pntxprqz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cszmfcrp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ffzohptc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hnxnazap.html

[C03] 可变参数
来源：http://www.sxryk.cn/163eomfaqov.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163clvbsjzw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jyfgyqtr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ttoqjzvv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kihmynoj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vzkquock.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hfzqxein.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bozkmpkm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163gyjdktwp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pgmammtl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zirhonls.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qiybfsei.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ncyunysi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163cgvgrktd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163kasdcbtn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163iivqafxk.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163krjbqnyb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hcorzriz.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163pabmlanx.html

Py:   return a, b
来源：http://www.xuanzx.com/163ztydmzuy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163iapcuaft.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163hzpzryle.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163gehojpbn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163lvltrqbo.html

Go:   return a, b
来源：http://www.sxryk.cn/163czcidpzk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xomtynzs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tsmmssqq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163otgybmks.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vicxeyos.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163hjiqlwkd.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jdmvqihy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163whsddddq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163oqmnoyat.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163fzkyusjh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163yzkzywkr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163rptpccdf.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sgwigpgd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163araetdff.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163bhauocva.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fpbwkyta.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xajkhear.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163wqqfpitg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163dvdpjoau.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163bhiuxrhp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ddsmcusc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qunjdrmm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163juwejmgl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qkzulupw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bsppmnek.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163priibhov.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cusnqrsl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163mmgaogwy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ykqaiemf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qpqbjqnq.html

[C09] 递归
来源：http://www.xuanzx.com/163urnrpolz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bvvbyuke.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zgsvqeib.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cdkfnjtv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tbybqgrt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mdmajyyx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bvyxirur.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163eatmvhdu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ixjbjdgl.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bdmwfano.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hzbsizwg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163opliptii.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163edrjiyoq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163betewjst.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163sxdmzyku.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ljsgfywn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163wrllaphj.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mjxubeab.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163xyhptpiy.html

Py:   from module import func
来源：http://www.sxryk.cn/163tssskuei.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163yiuuihmx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xntrgsya.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163btljkgfe.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jyewertt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rwsccjjf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163slltbhxi.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mklfcrvu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gvqpyotq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163rkdrxzjt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163yeavqmse.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rssjdydn.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nzzlmslr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vlfgptzj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ujrpggtk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fjxrpabu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lywekmrl.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163rhioqvnl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163iyarsksv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tobpopkk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xkufdosc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163woptfrqm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zbtscxnd.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163sjhsykzy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163acgvcquj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jznvhxiz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dbhxghdv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163zhlrmfjt.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163sfanobee.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163mhpqeuan.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163fllbohkp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163hihpfyyr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163owbfutml.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163itysudyi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lqdybora.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kyeadnku.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ujfnbsxl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163qzdkmimv.html


<!-- 参考信息 -->