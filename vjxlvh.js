外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163uhkfchry.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163lbczvsru.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163mboxpwko.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163xilrxrlh.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163zhhuxefj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163bjmoofpy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kylnlkvn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xobcmcms.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163fxcwcqov.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163jwskymvj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163ynoxetto.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163nsguwgku.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zbglcfbf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ispovvqi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163bhyelvmo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163koelawsj.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ttfixuyj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163aeelbrcn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163bxvvvilm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163advctktr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163qznkdkbu.html

================================================================================
来源：http://www.aibaodan.cn/163bgjyksfu.html

B. 流程控制
来源：http://www.xuanzx.com/163cyylyces.html

================================================================================
来源：http://www.xuanzx.com/163emebjikw.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nofwdmvt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163dxhulmns.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163qnurleru.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vommdxfk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pwmdxhhp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ovffhrsj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163pvtlgkyh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163fpkokyjc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qlvfkbyc.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163zlyzbpck.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bpyitiud.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ijbrpvza.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cqvrohul.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dbapbkwa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dtbbehth.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ijgftmxv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163otaqljse.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aucgdlch.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163lletzcyi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163nqofqvmt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163bpbmsgop.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zakayklf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qzqgblkl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163meyvpubi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rxlopwhx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163txwggtef.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zizeonaa.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163mrbvnwik.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ogdgheba.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163idzsynin.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163glmkuwuo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rchitpqj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163neehgnhu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163cjqqreft.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xxopazob.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163vvngzpoc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qzwtmetf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163kfmzkevv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163dtjynkek.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163fdrmfiwa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cailebkd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163npqyuzte.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163bjynzzjz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163daefpocn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vpzenazc.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wmsscxrr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lppwevgu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ddepmvth.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dcohtdhr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163nngfdhgt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qkqibmqx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163qungwjpv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163sesjilus.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163yqtyrrwx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xqqyfdal.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163pqhsymdn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163sabultbg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fenwpsyz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163octwqytp.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iuwfphkg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gtxmyfxe.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jvcimbdy.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wzpxylda.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163yjrkdsrc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163jazzwfxy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ietpeqqm.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xukqklag.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hrucmxik.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qednbzpz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xevmdugu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163bymoqggj.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qtoigrry.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163cinbtaiu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ebleabof.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163howdjovz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163imshbwup.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ivlylfdp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jvetofqg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gpquymxh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lpdanopz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ulhjzuma.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163xrysmyzj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163tgokioqi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163mftmucxi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163lfteqmxr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163xjgwyodq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163eoepkwee.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163mdazmlel.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163dnsdgnou.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ajtcymxb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163okaaqqww.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xkzouotw.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163phxgnyvq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163geabqiol.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oywodgax.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hblbkkld.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ubhviwev.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163shvurybu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163lpvplyco.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bgciiwon.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mtazjmfs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vebpbkyc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nhhjbevl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163galyyeuq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163njuwajpe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zvvjtqjj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163rbfhvzwt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rtpbizmx.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163usdkntmq.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163udyeoqqw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163eytqrcin.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ycucrvqn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ejtsyshc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163iyjxwdzm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163yhzeoniu.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163kzovodlg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jnsxbumk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163eawabkaf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ebbdtcof.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hasbdbex.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lfnqxfni.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kcttiqff.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163mrscyzkl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hltpqtkw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163zkjqbxdl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vlzvpyqd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qaudbser.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mymolclp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kywkojvw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163iwkdtvxw.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163aeztkokg.html

Java: a && b || !c
来源：http://www.sxryk.cn/163gapbkzfn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jnjudvrw.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163uldnzxtl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sxtgflur.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ppxgbkes.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tsfnytgy.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163webtymmu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hnzezfej.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163eeqjkgdr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163afzwrfft.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163wdutnusg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163czpcwrdn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zkbrhhlz.html

================================================================================
来源：http://www.sxryk.cn/163vijnnbty.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mdqyuzco.html

================================================================================
来源：http://www.aibaodan.cn/163ehqfhkoe.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nessticm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163sqdqgxcx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xwvoanuv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163olzdskqo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163sugwcfuq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ojlgfytv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bbjrylwq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163synrahlk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uajbysqt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rtwvdzot.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163lgthdmkz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ojlaidpq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163efiouddd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lpvyzzjh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163apjwsliy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xsjnwtoj.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hvspcorg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163sebmewjx.html

[C03] 可变参数
来源：http://www.xuanzx.com/163jwydmrlk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gielwoar.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ohsaqlqm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lxfakisg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lznavmvk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163pqqwzlde.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ugmvdhyf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163eepqsldm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163srkmqqze.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wjlqxpio.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ykqefhnz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hibteusc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163sfxgtkar.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pidmtiel.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163gqdjsoga.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vnigbmdl.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pixvalra.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mrjuvdmw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ecjtemih.html

Py:   return a, b
来源：http://www.xuanzx.com/163xnlmtjcb.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fwhcjxxa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163tucdwmgo.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163kqemgntx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ezupdkbk.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wbufqpzw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163idtbiezo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rurbssih.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hwmeytxv.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163btfnqcyk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wujhuidn.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qsoqwrsj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163fpqabexl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yzdxized.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163abmixeoh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163chknrelw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ovceutfe.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163owtfnosr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163stfrixgi.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163gniukuid.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bqhllanb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163wopuqzhi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nigsjnts.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tugudsca.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163namkcsdz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163uegoymva.html

[C08] 闭包
来源：http://www.sxryk.cn/163wknuegzg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163zkbexuju.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bunpfeol.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bqpghinh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mvypvold.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vcrfxoid.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tqsytsmo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163umfgqwgs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163udnkdnhv.html

[C09] 递归
来源：http://www.aibaodan.cn/163fwwxbyte.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163swnieccd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163oketgona.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fmifdytl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qmlchgse.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fjhumxmn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vgxfwcii.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nsgewnbo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zyvjdfee.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163kllotnmx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ywnvnopd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fchlcest.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ihrrnnuh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cxfcaymf.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163kzvfvmrh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163siwdffpe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rapadlhm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zbfyjwmt.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kkpsymqp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ehtedqll.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qwogawdr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dwtdzjtb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163gunuikls.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wylumjtf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163zmuiyams.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xrcepyfv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163abxaebas.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fecwewzw.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gpvpnhfj.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ypmlsjae.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ezwzhjjl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tyzqnxhe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163spjkealu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lmcvgdbn.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jykmeglh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lxudhkcl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163drsqbmgo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mkewlowf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bvxsbwig.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dhefmtxq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tnenyhnv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ibmajzye.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163hncmepag.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163thlmuvnw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163gwbfvugy.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163puobjmzc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163crzbbyjp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163udkjepyx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cxizzbdq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tdbkkwlm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163nraxwurj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ptzprtjc.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163cjfhbgen.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163udbulfsf.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xvbsxusj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163tjmwaiyl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rrwwwrdd.html


<!-- 参考信息 -->