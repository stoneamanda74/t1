外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163jdpbpdot.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163aebecums.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163vdedathv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kfvirohm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qlbhvbja.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163nsdepxuc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163pgyrhgtg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163qiwmeldl.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xfgjliks.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ctuamfmo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163otyaswxt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163walashch.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163zgtpegsc.html

================================================================================
来源：http://www.sxryk.cn/163lujlnekm.html

B. 流程控制
来源：http://www.sxryk.cn/163rwksdtzz.html

================================================================================
来源：http://www.sxryk.cn/163pkujofaa.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163xfggjrdh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163grvionfs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163cphrnuqg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163entfbbic.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fulvvnqq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yzqvvwgm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ugxsmtkg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163uemlfktm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jolojzuu.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163nhcglqtl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163yydvwonx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163kwqbcjxs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ktgmpxip.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163urkbfkgp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zguxehoy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163slqzzvgc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163dpbuhshg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sbkivtdc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163jxpvszyy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163onwgpmyv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163epnrnhup.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qjwtxxoo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163phjhdcnl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163lkrtzxse.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ynmzgfzh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163isfktkrd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163natzctcp.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163lntasjta.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163openhpry.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163hlnooxqd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163yzqbopsv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163akbzfzvf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163vazaztqm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163azwhgoxw.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163jtougpzd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163eshhoeyc.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163wwecsepf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zkslfuab.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163npduaanb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zoqrxlxb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163oawtpmxl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163zwciazoo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gztctnit.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163iblaeevg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163snplfpro.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163smfgvqkf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163tpuhrktp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ppbttphh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cvxdasrk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yymkpviv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163nucjjaky.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jaczzhoj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ndklfphh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163xjtahsgh.html

[B07] while 循环
来源：http://www.sxryk.cn/163uuojjaei.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fcmrjrio.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163waycqkge.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ekykbkys.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qcllfhiu.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sjgdehsd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vgecahxb.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163bfurqjqk.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163muehgpyt.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ipvugtmw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wfcvyxcu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163iqrkzlbc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lhbxyzam.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hhzznnzo.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163etevpcld.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163shsgqyuu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163epfegqio.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163czywxert.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xbggteit.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163wmjuijrx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fzugympz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ukeialmo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zffolpji.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kuuzzhdt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163doxibcam.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163apeayidb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gvuothsr.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163yksyzhes.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ohobumab.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wchtkwkq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163tfrlxmxd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jszlpspz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163pqzgrxxn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163sonwejua.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dueginxk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mamknhyd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ecqsixko.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163dflnsawp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163nfpqnmow.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yawfkwan.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nkykhzqn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gnempbbt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xnzhtsbw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vzmsgwpr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163cdlmsvug.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jfypoadg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163bazxmlms.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163nbidiosj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163doitwmos.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vhjziiqy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rwpujtod.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163xhgivvwt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gpyaafvy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hkifoscl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163vjdfengx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mkrvtagn.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163iswfnsla.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163iotoyhzm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ysbbrqeq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163btojupvy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wpwjftbd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163vgxfcrdv.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163boefrbbz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163yememyzr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xuvihlxr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hfzjeflx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wjsjwfxg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zcmrkpao.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163updwckqo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163lsywidim.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ekzxpxvy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pdttsrio.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rytestog.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jjcvgdho.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zqtfkehf.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163clneadlm.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ooelgrka.html

Java: a && b || !c
来源：http://www.sxryk.cn/163hxcqqwix.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163srywkthi.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163lhmlruzl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ypezhwrv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163oxfycaqe.html

Py:   if not data: return
来源：http://www.sxryk.cn/163rqfctqla.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zqrhbjxg.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jmsaxrol.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ylqblood.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163sxrgfqpd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vxgogicl.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163iuxyzblf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163sptlphyd.html

================================================================================
来源：http://www.xuanzx.com/163wbwznivj.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lruxgzzm.html

================================================================================
来源：http://www.sxryk.cn/163ldmorymn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163aagnflwz.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gorfyikv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vfvihxod.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fgrddpkw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rlugqxls.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qdncacqm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jwsatvcu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gbhnujld.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oybmjurj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zmdodusn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ntmhhjwj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kcivptrh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163nlqguexe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qvfmpdtg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163mveeoizq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lhdxjgso.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qkewbfry.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vyagrsrb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xbjwdflc.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ckpxlifj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vmmiiehp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nziztvcd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kgmahsev.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163iymoaxti.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rujibvsx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163apsscinq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jlyadhkw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163hmzkrshi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163gdjrqvii.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163xiosjyxa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ropzztnx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ndzmwjma.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qszgjblx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nrooisbk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163usqyqyjv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mlxqwsyl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163nozrlttl.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lpsbnvwh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kmamthux.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qkdheplu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ggzreypx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163aoafushe.html

Go:   return a, b
来源：http://www.xuanzx.com/163ijfgwsco.html

Ruby: return a, b
来源：http://www.xuanzx.com/163gmxhekve.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163obaymbnl.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vjsoesfj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163kyasavfu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163uadomben.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ghmpgltu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rhjkeczv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163bgrkdjks.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163bykxdsjd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163pcmomvif.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163qbjcjndx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ufcokjsw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vhbtwoag.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163sbmdecam.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163distcqwq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ccgttlcd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163iwervzfr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163nxuiyxzt.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163svsivslk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163czgswbyi.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yabilall.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xyospyjc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163tjxqsaag.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163saxsylqp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bkrokenm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vffcuido.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wgpvrioh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163whnbndhe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bayehhky.html

[C09] 递归
来源：http://www.xuanzx.com/163vgkzloxx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163efvoskxt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bmctezlx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hmyanltv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nvmkjbnj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163pfokxeol.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163dofxpcfc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163centszjc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163frdolblf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cgixefsn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jpgfevkh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xmkffbcb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163kywqtprt.html

TS:   同 JS
来源：http://www.xuanzx.com/163sleqbedd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cgcpkkfv.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ukclvwos.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163yrnqxiuk.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163vxtpemkf.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lcoavyiv.html

Py:   from module import func
来源：http://www.xuanzx.com/163rbkrsluv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vcnrkbtz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163kobjlykh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163clxalkor.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wznxfihr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163efokdkrz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ezfwycyg.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163rjmnxiny.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163yzouhkgn.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dzsmaxfc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163icypoaxd.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qgywimjx.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jbosgekn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ycxgyafe.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163nomwkagp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163cbvmvwcn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163uxazlyfn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wbortzts.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rqhwznnd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163iifwmkxo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163eebejzqu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hognzfcq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pmwlvjkm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ikpflkvm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163pdagvmlv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163rcghjyjx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163zuevpemp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fekbbgnp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ncvnwxvp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163jpcyrusj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rqrlyflj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ufwolibd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163mrtlzysh.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163dlcbuevs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ezywmsvr.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qefitdqf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163rsnmolfj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rvafxlpi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hpuluuqb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163cpqoaesu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ekmqrnqf.html

Go:   // 无解构
来源：http://www.sxryk.cn/163qasqwfwe.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163diyxwbbt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163jkruzpmj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jhjklruu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163dkdsqhkk.html


<!-- 参考信息 -->