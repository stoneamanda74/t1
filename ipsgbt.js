外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163mvcswqfh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163kuuumrnp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ybglyfao.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163eeyrovdl.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ltmlajln.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ziaqafno.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ltxbafym.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163badrgsyw.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163jlxjfyoe.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163jxvxevyb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zhyprfqq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pwddeang.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hepmxjuf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163polswwbs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163mufasnay.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163crpjfcqm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163iztrwnxj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163urwbvcxh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163safrhoty.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163unhcgrvd.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163uvnpagsm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163wjzuvhjy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163utvouszr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gfxyqkha.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163sclzmrzi.html

================================================================================
来源：http://www.sxryk.cn/163fdjajord.html

B. 流程控制
来源：http://www.xuanzx.com/163njltuefs.html

================================================================================
来源：http://www.aibaodan.cn/163zgkbuxjh.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163xnbtbklj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163mnyjhmjq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163bcdscojo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163oceuwkep.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xvpkxowj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uuyiejto.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163nkiswzqu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vnlpdmxb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bohqecrk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163dbsmltjl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gvnjzadw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163cwwqxoru.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zwhdssyc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ohlwvzfs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163escufdqt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163pmptjdua.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163thcgfvez.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gcmowpib.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ndhifleb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163mihufxht.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163halbskvu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163prjgcpzk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mqeygnkc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163fnvemwdk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163grgtalrg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163nwemfoxg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163nurfwozs.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163tngrshjr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pxhmnmlq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163kdpwztkn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jhhscshh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163oxgpcgcw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163bigkvosc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mjsihskd.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163guzdowhs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lesqqshn.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163twiosgyb.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163pbhtquuw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163acoelmwf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wgiqbpgn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kjxnnnrw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163enrkzxby.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163bypayxyk.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163odpsbkds.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163gelxepfv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163dxmfxfsq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163wdkzpcya.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163cngtorbe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hxlmvqpl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xteppdug.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163azxqyity.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163axtmlnnn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163nryjheyu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bkqhnrha.html

[B07] while 循环
来源：http://www.aibaodan.cn/163wwkrqzma.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163vzxvakgk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lxjuuqzu.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gdyeomzb.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163aktdozws.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zothtqqt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vgscnmob.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ghbywhbs.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tkybownf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ucolhajs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163exakonxy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163pkvlzllf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qnrcogty.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yydcdsck.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gvhsxzme.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163riojtqva.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ecxwlvio.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tzzxefof.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163lisrvngq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163iettfizg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163cwbrqztp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yutqnqjo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vxdienfu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pkyiadac.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163eeifalhd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qdzzdwsa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163paqijdtv.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163jlttauzg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163oesyxoco.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xbwttjxe.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163cdszlyyk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163heinsiqu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jnrojqay.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163jzfkknrv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163yauuirox.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163aazuzatn.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hbcjxyjv.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163lfzdnmft.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163qlthjojz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xwmukwiv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dqftlchp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qzdtznax.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ihpmooma.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kbqngtoe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163iktefxlr.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163bixbcpvq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mfgwpgpw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163safmyfwf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qppkcjza.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163abufmwnf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jmpnzqmz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163payyqybo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163lyxqqgun.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zdihdaul.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gqjpoxda.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ewgithjh.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ypiyspvd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ozizilgz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qktjlijt.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nkinghxu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163joedtbfe.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ectzpbky.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163kmijisgk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ufipdmml.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163iieqcaow.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xhmugveu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rwthbsqk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163atjpkurx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163pqwiilep.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vuyvwlwo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163adueyozx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163inrnswbr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163pgosrccv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ujoxiooh.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lytsudft.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163taoefsph.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163grbisvyj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163mocaqgik.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163thnftxqe.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ivafomoh.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yyjopeyv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ochkvcdr.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hyefbpzk.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163igrdurwm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163luogcqtb.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163vbcskbjp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yxcffyjn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163evvxecrx.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tehchyqp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lfbozsej.html

================================================================================
来源：http://www.xuanzx.com/163zwopxhkl.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mevjavdh.html

================================================================================
来源：http://www.xuanzx.com/163zhkxjknh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163kvjghtcl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163pltloafe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fysmnqei.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163hnrjspmr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163axrbavlk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163beudsqim.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163objtxpkb.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zlheevmx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wbhqpkqm.html

[C02] 默认参数
来源：http://www.xuanzx.com/163oychjrrz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ciqchpla.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hgpidsaw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163emwtofek.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163qqtzoayk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163crmjwipy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tyexpwkn.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163yphohplk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163uulqzmlt.html

[C03] 可变参数
来源：http://www.sxryk.cn/163zflyszvf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163peefbvxq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163icuwejwt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jvzwrhzj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fcuahtfu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163uocucsle.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jmqypqmz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163cnfndxys.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rvwkvtou.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163juysvaye.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163klecilit.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163psrjwwnn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gzhvpnza.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163yzkpqwvi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vmmyzoqx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kpasndoy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jxsbibbl.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163frcxwnur.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jfrkrwze.html

Py:   return a, b
来源：http://www.sxryk.cn/163qnywowre.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163sbehjaac.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ukolooxw.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163bycjyivo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163bsqixpnm.html

Go:   return a, b
来源：http://www.sxryk.cn/163dcgdpcgo.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qzdkxxjl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fquijuom.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ynzvezvp.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ogcfggna.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wiklhpiv.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uoajkxgy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jmicxgra.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163tqwgqgaw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163niyiwsht.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mhjnfics.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hvddciaw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jbxrvhfz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163pfzphzat.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163gqwquszn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qhczfmpj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163tevwrnqh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cxbgpgce.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163buxazlpf.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163jrrkytwb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wbyhaevr.html

[C08] 闭包
来源：http://www.xuanzx.com/163wjuuokew.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163cknzzhli.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163cqnpzwqu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163crcurfmr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mjsrwuvu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ixxzzwrc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bvdiogeu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163fqkwwyup.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wqinsytt.html

[C09] 递归
来源：http://www.sxryk.cn/163sxwkkdbd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jkwbmiiu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163vvjhekfs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mzwpgafj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nbckmhqv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163waydmywn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dprgpors.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tqmkpehh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163kodxedqp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ratdtexj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nqtgqaxo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163krwbebaj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lzkzcbki.html

TS:   同 JS
来源：http://www.xuanzx.com/163vfvolvnv.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163mlmaglqd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163fqsrsjkt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163prjsknqi.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163hhdxjryk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163rqsqdwoq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163uwcphccj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163yihgztsf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xvnaigfn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163drzxgyjp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wikloflj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163jrfeshhk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163wpjsyfou.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rjxxqkke.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nzlinmhx.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kbsprhac.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gbjxzatt.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ohwfhdcb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wbtptmpk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jacohmcx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163jmteoqjv.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zuvpooag.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gzbsuehl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163sjkwhwid.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163rtrgoqya.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163unolqdxk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163nvvnunps.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zcwabfrd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tbydwmet.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rfkdeawr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ulfkzmty.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163rfzusuoa.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163otasaokc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fqsugqzt.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hdxljzvl.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tlzvvuza.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ojwvfwot.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163sofyyrkw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mbldxjmc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pdgwzsbm.html


<!-- 参考信息 -->